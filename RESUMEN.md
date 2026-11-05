# Proyecto: VistaCarta

Estado: idea / flujo tentativo (2026-11-05). Diagrama original: [flujo-v0.png](flujo-v0.png)

## Decisión MVP (2026-11-05)
Núcleo: **foto/PDF → menu.json → web HTML (URL fija) → QR**. El JSON es la fuente única: la IA lo genera, el cliente lo corrige y todo lo demás (web, QR, traducciones, PDF) sale de él. Grafos y borrador del JSON en [flujos.md](flujos.md) (visor: [flujos.html](flujos.html)).

Recomendaciones incorporadas en el grafo completo: traducir después de aprobar, pedir los datos del restaurante en la entrada, marcar campos dudosos, URL fija para el QR, editar precios y disponibilidad tras publicar, alérgenos vacíos si hay duda. PDF, post para redes y WhatsApp pasan a v2.

## Referencia de estilo web (2026-11-05)
El usuario prefiere el estilo de [referencias/estilo-web-referencia.png](referencias/estilo-web-referencia.png): app móvil con barra superior roja, categorías como íconos redondos, rejilla de tarjetas de 2 columnas (foto, nombre, descripción corta, precio, botón +) y navegación inferior. Choca con la web Astro actual (`web/DESIGN.md`: lista con guía punteada, sin tarjetas), que habría que rehacer. El `menu.json` de Wantan no tiene fotos de platos.

## Qué es (interpretación)
Servicio que convierte la carta física de un restaurante (foto o PDF) en una **carta digital** publicada en la plataforma VistaCarta, con ayuda de IA, y entrega al dueño los materiales para difundirla (QR, PDF, imágenes para redes).

## Flujo en 4 fases

### 1. Entrada
- El cliente sube una **foto o PDF** de su carta actual.

### 2. IA (procesamiento)
1. **OCR / visión**: leer el texto de la imagen.
2. **Extracción estructurada**: platos, categorías y precios.
3. **Guardar el original estructurado en BD** (azul en el diagrama = persistencia): copia fiel antes de que la IA modifique nada, sirve de referencia y para comparar.
4. **Mejorar textos y descripciones** (redacción más atractiva).
5. **Traducir** a los idiomas que el cliente elija.
6. **Sugerir alérgenos** (naranja = requiere revisión humana; la IA solo propone).
7. **Preparar borrador** de la carta.

### 3. Validación (humano en el bucle)
- **Vista previa y comparación** (original vs. versión IA).
- Decisión: ¿el cliente aprueba datos y alérgenos?
  - **No** → corrige los campos rechazados → vuelve a la vista previa (bucle).
  - **Sí** → se **publica la versión aprobada** → la carta queda **accesible en VistaCarta** (URL pública).

### 4. Entregables (verde)
- **QR** con logo y colores del restaurante.
- **PDF imprimible**.
- **PNG y post para redes**.
- Todo se **envía por WhatsApp o email** al cliente.

## Lectura de colores del diagrama
| Color | Significado inferido |
|---|---|
| Azul | Entrada / almacenamiento de datos |
| Amarillo | Paso automático de IA |
| Naranja | Punto sensible que necesita revisión del cliente |
| Verde | Resultado publicado / entregable |

## Puntos clave del diseño
- Alérgenos = riesgo legal/salud → nunca se publican sin confirmación explícita.
- Guardar el original permite trazabilidad y el "comparar" de la validación.
- La carta publicada es la fuente; QR/PDF/PNG se generan a partir de ella.

## Preguntas abiertas
- Público objetivo y país (¿Perú? normativa de alérgenos aplicable).
- ¿Quién valida: el dueño del restaurante en una web, o tú como operador?
- ¿Canal de entrada? (web, WhatsApp — relación con [whatsapp-mvp](../whatsapp-mvp/)).
- Idiomas de traducción por defecto.
- ¿Edición posterior de la carta (cambio de precios) tras publicar? ¿Versionado?
- Modelo de negocio (pago único, suscripción, freemium).
- Stack técnico: modelo de visión/LLM, BD, hosting de la carta pública, generador de QR/PDF.
- ¿Fotos de platos o solo texto?
