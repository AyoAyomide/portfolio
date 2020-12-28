module.exports = {
    runtimeCompiler: true,

    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/style/root/varables.scss";@import "@/style/root/animate.scss";`,

            }
        }
    },
    pwa: {
        manifestOptions: {
            "name": "AyoAyomide",
            "short_name": "Ayo",
            "theme_color": "#6DFDC4",
            "icons": [
                {
                    "src": "/img/icons/icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "/img/icons/icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                }
            ],
            "background_color": "#000000"
        },
        // manifestPath: 'manifest.json',
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            // maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        },
    }
}