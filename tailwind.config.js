const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Bahnschrift', ...defaultTheme.fontFamily.sans]
        },
        fontWeight: {
            normal: 350,
            semibold: 600
        }
    },
    plugins: []
}
