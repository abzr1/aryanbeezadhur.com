const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Blinker', ...defaultTheme.fontFamily.sans]
        },
        fontWeight: {
            bold: 600
        }
    },
    plugins: []
}
