const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            serif: ['Lora', ...defaultTheme.fontFamily.serif]
        }
    },
    plugins: []
}
