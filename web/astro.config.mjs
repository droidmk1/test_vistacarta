import { defineConfig } from 'astro/config';

// En GitHub Pages la web vive en /test_vistacarta/; en local, en la raíz.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  devToolbar: { enabled: false },
});
