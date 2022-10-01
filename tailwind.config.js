const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Fira Sans', ...defaultTheme.fontFamily.sans]
        }
    },
    plugins: []
}
