const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            serif: ['Newsreader', ...defaultTheme.fontFamily.sans]
        }
    },
    plugins: []
}
