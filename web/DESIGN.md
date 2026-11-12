# Diseño: carta pública

> **Versión actual: v4.4 (plantilla oficial).** Igual que la v3 sobria más: selector de idioma en la cabecera (bandera + flecha, fondo blanco, junto a Buscar, fondo blanco también) que cambia todos los textos en la misma página sin recargar; aparece solo si `restaurante.idiomas` tiene más de uno. Traducciones en `categoria.traducciones` y `plato.traducciones`; el menú del día se traduce solo (nombre, qué incluye, horario).
>
> **v3 (sobria), base de la actual.** Fondo blanco, sin tarjetas con sombra; el color de marca (de `menu.json`) solo en cabecera, pestaña activa, pie y botones principales. Categorías como pestañas de texto con subrayado. Platos como carta impresa (nombre y precio en la misma línea, línea fina entre platos); sin foto no hay hueco de imagen. Alérgenos en una línea gris ("Posibles alérgenos: Gluten · Soja"). Barra inferior fija de 3 botones: Carta, Buscar, Info. Pie de marca con logo, redes, dirección, horario, teléfono y reseña.
> Opcionales (solo aparecen con datos): `plato.foto_url` (activa la vista "Fotos"), `plato.precio_anterior` (precio tachado y -%), `plato.destacado` (sección "Nuestros favoritos"), `restaurante.contacto` {direccion, horario, telefono, mapa_url}, `restaurante.redes` {instagram, facebook, whatsapp{numero,mensaje}, google_resenas}.
> Lo de abajo describe la v1 y queda como historial. Versiones: etiquetas git `v1-original` … `v4.4-wantan-idiomas`; la plantilla oficial vigente es la etiqueta `plantilla-oficial-v4.4`.

Sistema visual de la carta pública de Wantan (`web/src/components/Carta.astro`, una página por restaurante en `web/src/pages/[slug].astro`, y `web/src/styles/menu.css`). Sustituye al diseño anterior (lista con guía punteada). Referencia fijada por el usuario: `../referencias/estilo-web-referencia.png`.

## Modo y estructura

- **Modo:** Operate. El comensal escanea el QR, elige categoría, compara precios y busca platos. Solo consulta: sin pedidos, carrito ni botón "+".
- **Estructura (móvil primero):**
  1. Barra negra fina con el menú del día y su horario.
  2. Cabecera roja fija con monograma, nombre y lupa.
  3. Bloque mostaza del menú del día, con los platos desplegables.
  4. Fila de categorías como platos redondos, fija bajo la cabecera, con desplazamiento horizontal.
  5. Barra de vista (**lista por defecto**, rejilla opcional) y botón Ordenar. El botón abre una hoja inferior "Ordenar por" (`<dialog>`): Recomendado, Menor a mayor precio, Mayor a menor precio, A–Z, Z–A. La opción elegida se marca en rojo con ✓ y se aplica con "Mostrar resultados". Después, el botón muestra el orden activo.
  6. Contador de resultados.
  7. Rejilla de platos.
  8. Información (horario, alérgenos, aviso de borrador).
  9. Barra inferior fija: Inicio, Menú, **Carta** (disco rojo elevado), Buscar, Info.
- Una categoría a la vez. La búsqueda recorre toda la carta, oculta el menú del día y las categorías, y muestra los títulos de sección. La barra de búsqueda no es fija: se desplaza con la página y se cierra sola si el campo queda vacío, o al usar la barra inferior.

## Color (tokens en `:root`)

| Token | Valor | Uso |
|---|---|---|
| `--red` | `#c8102e` | Cabecera, categoría activa, botón Carta, bordes del plato |
| `--mustard` | `#f2b705` | Bloque del menú del día, selección de texto, icono de la barra superior |
| `--ink` | `#1f1a17` | Texto, barra superior, anillo de foco |
| `--ink-soft` | `#5c524c` | Texto secundario (≥4.5:1 sobre blanco) |
| `--ground` | `#f5f2ef` | Fondo de página |
| `--card` | `#ffffff` | Tarjetas, barra inferior |
| `--plate-ground` | `#f3ece6` | Fondo del hueco de foto |
| `--porcelain` | `#fffdfb` | Plato |

Estrategia: comprometida. El rojo es dueño de la cabecera y de la navegación, y la mostaza del menú del día. Solo modo claro: se usa en el local con luz interior.

## Tipografía

- **Figtree** (autoalojada con `@fontsource/figtree`, pesos 400–800). Nombres de plato en 700, precios en 800 con cifras tabulares, títulos en 800.
- Escala: título de sección 1.125rem, menú del día 1.375rem, precio del menú del día 1.75rem, texto 1rem, etiquetas 0.75rem.

## Gesto propio: el plato de porcelana

Mientras no haya fotos, el hueco de foto de cada tarjeta es un plato de porcelana chifa: un círculo con doble borde rojo (sombras `inset` en capas) y, en el centro, el icono de la categoría. Las categorías usan el mismo plato en pequeño; la activa se rellena de rojo. Cuando haya fotos, se sustituye `.dish-media`, y la tarjeta mantiene su estructura.

## Componentes y estados

- Iconos de **Lucide** (`lucide-static`, trazo de 2px) importados como SVG en línea; uno por categoría (mapa `iconos` en `Carta.astro`).
- Tarjeta: blanca, radio 14px, sombra suave con desplazamiento. En lista pasa a fila con plato de 56px y precio a la derecha.
- Estados: categoría activa (`aria-current`), botones de vista (`aria-pressed`), agotado (`.is-off` y badge "Agotado"), búsqueda sin resultados (mensaje con sugerencias y "Ver toda la carta").
- Sin JavaScript se ve la carta entera con títulos de sección; la clase `.js` activa el filtrado.
- La vista elegida se recuerda en `localStorage` (`vc-vista`), dentro de `try/catch`.
- Movimiento: transiciones cortas con ease-out exponencial en el plato de la categoría, los botones y el chevron. Se respeta `prefers-reduced-motion`.

## Pendiente

- Fotos de los platos (sustituirían al plato de porcelana).
- Logo real y colores exactos de la marca; ahora se usa un monograma con la inicial.
- Texto de alérgenos provisional: falta confirmar la normativa (UE, 14 alérgenos).
- Descripciones de plato vacías en el `menu.json`.
