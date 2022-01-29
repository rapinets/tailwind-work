const plugin = require('tailwindcss/plugin');
module.exports = {
    // purge: [],
    content: ['./public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            ms: '576px',
            // => @media (min-width: 576px) { ... }
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            '2md': '992px',
            // => @media (min-width: 992px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            flex: {
                '0-0-33': '0 0 33%',
                '0-333': '0 33.333333%',
                '0-50': '0 50%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-pseudo-elements'),
        /* Unset Plugin */
        plugin(function ({ addUtilities }) {
            const unset = {};
            const prefix = 'unset';

            /* Define prefix to css property map */
            const unsetTypes = {
                position: 'position',

                top: 'top',
                bottom: 'bottom',
                left: 'left',
                right: 'right',

                w: 'width',
                'min-w': 'min-width',
                'max-w': 'max-width',

                h: 'height',
                'min-h': 'min-height',
                'max-h': 'max-height',

                mb: 'margin-bottom',
                mt: 'margin-top',
                mr: 'margin-right',
                ml: 'margin-left',
                m: 'margin',

                pb: 'padding-bottom',
                pt: 'padding-top',
                pr: 'padding-right',
                pl: 'padding-left',
                p: 'padding',

                'bg-color': 'background-color',

                b: 'border',
            };

            for (const type in unsetTypes) {
                unset[`.${prefix}-${type}`] = { [unsetTypes[type]]: prefix };
            }

            addUtilities(unset, ['responsive']);
        }),
    ],
};
