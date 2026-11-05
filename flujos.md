# VistaCarta — Flujos (v1, 2026-11-05)

Visor renderizado: [flujos.html](flujos.html) · Diagrama original: [flujo-v0.png](flujo-v0.png)

## Grafo 1 — Flujo completo (con recomendaciones)

Leyenda: azul = datos/entrada · amarillo = IA automática · naranja = revisión humana · verde = publicado/entregable · gris punteado = v2 (fuera del MVP)

```mermaid
flowchart LR
  subgraph E["1. ENTRADA"]
    A1["Foto o PDF de carta"]
    A2["Datos del restaurante<br/>nombre, logo, colores, idiomas"]
  end

  subgraph IA["2. IA"]
    B1["Leer texto<br/>OCR / visión"]
    B2{"¿Lectura<br/>legible?"}
    B3["Extraer platos,<br/>categorías y precios"]
    B4[("Guardar original<br/>en BD")]
    B5["Mejorar textos<br/>y descripciones"]
    B6["Sugerir alérgenos<br/>vacío si hay duda"]
    B7["Marcar campos<br/>dudosos"]
    B8["Borrador<br/>menu.json"]
  end

  subgraph V["3. VALIDACIÓN"]
    C1["Vista previa y comparación<br/>dudosos resaltados"]
    C2{"¿Cliente aprueba<br/>datos y alérgenos?"}
    C3["Corregir campos<br/>rechazados"]
  end

  subgraph P["4. PUBLICACIÓN"]
    D1["Traducir lo aprobado"]
    D2["Publicar versión<br/>aprobada"]
    D3["Carta en URL fija<br/>vistacarta.com/restaurante"]
  end

  subgraph S["5. ENTREGABLES"]
    E1["QR con logo<br/>y colores"]
    E2["PDF imprimible"]
    E3["PNG y post<br/>para redes"]
    E4["Enviar por email<br/>o descarga"]
    E5["Enviar por WhatsApp"]
  end

  subgraph M["6. MANTENIMIENTO"]
    F1["Editar precios<br/>y disponibilidad"]
  end

  A1 --> B1 --> B2
  B2 -- No --> R1["Pedir nueva foto"] --> A1
  B2 -- Sí --> B3 --> B4 --> B5 --> B6 --> B7 --> B8
  A2 --> B8
  B8 --> C1 --> C2
  C2 -- No --> C3 --> C1
  C2 -- Sí --> D1 --> D2 --> D3
  D3 --> E1 --> E4
  D3 -.-> E2 -.-> E5
  D3 -.-> E3 -.-> E5
  D3 --> F1 --> D2

  classDef dato fill:#9be7f7,stroke:#2b8fb3,color:#000
  classDef ia fill:#ffe46b,stroke:#c9a400,color:#000
  classDef humano fill:#ffb070,stroke:#d07020,color:#000
  classDef ok fill:#b2e85a,stroke:#6a9e1f,color:#000
  classDef v2 fill:#eeeeee,stroke:#999,stroke-dasharray:5 5,color:#555

  class A1,A2,B4 dato
  class B1,B3,B5,B8,D1 ia
  class B2,B6,B7,C1,C2,C3,R1,F1 humano
  class D2,D3,E1,E4 ok
  class E2,E3,E5 v2
```

## Grafo 2 — MVP enfocado en input → output

El JSON es el contrato: la IA lo produce, el cliente lo corrige, la web se genera de él.

```mermaid
flowchart LR
  I1[/"Foto o PDF<br/>de la carta"/]
  I2[/"Datos del restaurante<br/>nombre, logo, colores"/]
  X["IA visión<br/>imagen → JSON"]
  J[("menu.json<br/>fuente única")]
  R["Revisión del cliente<br/>formulario sobre el JSON"]
  T["Plantilla HTML"]
  W["Web pública<br/>URL fija"]
  Q["QR"]

  I1 --> X --> J
  I2 --> J
  J <--> R
  J --> T --> W --> Q

  classDef dato fill:#9be7f7,stroke:#2b8fb3,color:#000
  classDef ia fill:#ffe46b,stroke:#c9a400,color:#000
  classDef humano fill:#ffb070,stroke:#d07020,color:#000
  classDef ok fill:#b2e85a,stroke:#6a9e1f,color:#000
  class I1,I2,J dato
  class X,T ia
  class R humano
  class W,Q ok
```

## Borrador del contrato `menu.json`

```json
{
  "restaurante": {
    "slug": "la-buena-mesa",
    "nombre": "La Buena Mesa",
    "logo_url": "…",
    "colores": { "primario": "#B22222", "secundario": "#FFF5E1" },
    "moneda": "PEN",
    "idiomas": ["es", "en"]
  },
  "categorias": [
    {
      "nombre": "Entradas",
      "platos": [
        {
          "id": "p1",
          "nombre": "Causa limeña",
          "descripcion": "Papa amarilla, limón y ají, rellena de pollo.",
          "precio": 18.0,
          "disponible": true,
          "alergenos": ["huevo"],
          "alergenos_confirmados": false,
          "dudoso": ["precio"]
        }
      ]
    }
  ],
  "version": 1,
  "estado": "borrador"
}
```
