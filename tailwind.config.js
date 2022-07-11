const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{components,pages}/**/*.js'],
    theme: {
        extend: {},
        fontFamily: {
            display: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
            sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans]
        }
    },
    plugins: []
}
