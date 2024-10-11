const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.html'],
    theme: {
        extend: {},
        fontFamily: {
            body: ['Iosevka Web', ...defaultTheme.fontFamily.mono]
        }
    },
    plugins: []
}
