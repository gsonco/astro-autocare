import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    server: {
        port: 3000
    }
});