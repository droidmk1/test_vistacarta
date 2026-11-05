# test_vistacarta

Prueba de VistaCarta: la carta de Wantan Chifa Peruano convertida en una web estática a partir de `wantan/menu.json`.

- Web: `web/` (Astro). Se publica en GitHub Pages con `.github/workflows/pages.yml` en cada push a `main`.
- Datos: `wantan/menu.json` (borrador transcrito del PDF de la carta).
- Contexto del proyecto: `RESUMEN.md`, `PRODUCT.md`, `flujos.md`, `web/DESIGN.md`.

## Local

```bash
cd web
npm install
npm run dev
```
