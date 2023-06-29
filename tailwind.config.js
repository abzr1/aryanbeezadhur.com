const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            display: ['General Sans', ...defaultTheme.fontFamily.sans],
            body: ['Switzer', ...defaultTheme.fontFamily.serif]
        }
    },
    plugins: []
}
