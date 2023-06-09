/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: {
                    900: '#202225',
                    800: '#2f3136',
                    700: '#36393f',
                    600: '#4f545c',
                    400: '#d4d7dc',
                    300: '#e3e5e8',
                    200: '#ebedef',
                    100: '#f2f3f5',
                },
            },
            spacing: {
                88: '22rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('tw-elements/dist/plugin.cjs')],
};
