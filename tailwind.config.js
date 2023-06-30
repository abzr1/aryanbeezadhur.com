const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            display: ['GeneralSans-Semibold', ...defaultTheme.fontFamily.sans],
            body: ['Switzer-Regular', ...defaultTheme.fontFamily.serif]
        }
    },
    plugins: []
}
