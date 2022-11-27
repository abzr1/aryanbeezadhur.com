const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
            serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif]
        }
    },
    plugins: []
}
