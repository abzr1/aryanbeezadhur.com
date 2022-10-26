const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['General Sans', ...defaultTheme.fontFamily.sans]
        },
        fontWeight: {
            normal: 500,
            bold: 600
        }
    },
    plugins: []
}
