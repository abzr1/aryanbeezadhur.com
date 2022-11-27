const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            serif: ['Source Serif Pro', ...defaultTheme.fontFamily.sans]
        }
    },
    plugins: []
}
