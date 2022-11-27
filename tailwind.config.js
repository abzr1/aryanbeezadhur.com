const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            display: ['Clash Display', ...defaultTheme.fontFamily.sans],
            sans: ['Satoshi', ...defaultTheme.fontFamily.sans]
        },
        fontWeight: {
            normal: 500,
            bold: 600
        }
    },
    plugins: []
}
