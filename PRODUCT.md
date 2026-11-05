# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (elegido por el usuario entre Astro y Next.js). Las cartas públicas son páginas estáticas con URL fija por restaurante. El procesamiento con IA (visión y extracción a JSON) se llama desde un backend mínimo; el proveedor de IA y la base de datos siguen sin decidir.

## Users

- **Dueño del restaurante**: valida y aprueba su carta antes de publicarla. Lo hace en una web con acceso propio. Trabaja con su carta física (foto o PDF) y necesita difundirla sin conocimientos técnicos.
- **Operador de VistaCarta**: prepara los datos de entrada y gestiona el servicio. No es el que aprueba la versión final.
- **Clientes del restaurante**: leen la carta publicada desde un QR o una URL fija, en el móvil.

## Product Purpose

Convertir la carta física de un restaurante (foto o PDF) en una carta digital publicada en VistaCarta, con ayuda de IA. El éxito es que el dueño apruebe una carta fiel en poco tiempo y que la carta publicada quede accesible desde un QR y una URL fija.

## Positioning

[Pendiente: el mecanismo diferencial frente a otros menús digitales no se ha definido todavía.]

## Operating Context

- Entrada: foto o PDF de la carta actual, más datos del restaurante (nombre, logo, colores, idiomas).
- Revisión: el dueño compara la versión original estructurada con la versión propuesta por la IA, y corrige los campos marcados como dudosos.
- Entregables: QR con logo y colores, carta en URL fija. Otros materiales (PDF imprimible, PNG y post para redes, envío por WhatsApp o email) están en la versión 2.
- Canal de entrada aún por definir: web directa o WhatsApp.

## Capabilities and Constraints

- Fuente única de datos: un `menu.json` que produce la IA, corrige el dueño, y del que salen la web, el QR y las traducciones.
- Alérgenos: la IA solo propone. Nunca se publican sin confirmación explícita del dueño. Si hay duda, el campo queda vacío.
- Original estructurado guardado en base de datos antes de cualquier modificación de la IA, para trazabilidad y comparación.
- Traducción: se hace sobre lo ya aprobado, no antes.
- Edición posterior a publicar (precios, disponibilidad) previsto; el versionado está sin decidir.
- Mercado: España u otro mercado europeo. La normativa de alérgenos aplicable (UE, 14 alérgenos) debe confirmarse antes de implementarla.
- Moneda: el borrador de `menu.json` usa PEN; con mercado europeo habrá que cambiarlo (sin decidir cuál).
- Sin decidir: modelo de negocio (pago único, suscripción o freemium), si entran fotos de platos o solo texto, proveedor de visión/LLM, base de datos, hosting, generador de QR y PDF.

## Brand Commitments

Ninguno confirmado todavía. Los colores, logo y nombre son datos de cada restaurante, no de VistaCarta.

## Evidence on Hand

- `flujo-v0.png`: diagrama original del flujo.
- `flujos.md` y `flujos.html`: dos grafos del flujo completo y del MVP, más un borrador de `menu.json`.
- `RESUMEN.md`: decisión de MVP y lista de preguntas abiertas.
- No hay carta real, testimonios, casos de cliente ni cifras de mercado. No inventar ninguno.

## Product Principles

- El JSON es la fuente de verdad: todo lo público se genera a partir de él.
- Lo que la IA no sabe con seguridad se marca como dudoso y se le pide al dueño; nunca se publica en silencio.
- Los alérgenos requieren aprobación humana explícita: son un riesgo de salud y legal.
- La carta publicada se guarda en URL fija, para que el QR impreso no caduque.
