const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.html'],
    theme: {
        extend: {},
        fontFamily: {
            display: [
                'Instrument Sans SemiBold',
                ...defaultTheme.fontFamily.sans
            ],
            body: ['Instrument Sans Regular', ...defaultTheme.fontFamily.serif]
        }
    },
    plugins: []
}
