/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#B88E2F',
                light:   '#F5F5F5',
                warm:    '#FFEBDD',
                white:   '#FFFFFF',
                orangeMain: '#FD6F2F',
            }
        }
    },
    plugins: [],
};
