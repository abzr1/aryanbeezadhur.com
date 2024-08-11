const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.html'],
    theme: {
        extend: {},
        fontFamily: {
            display: [
                'JetBrains Mono',
                ...defaultTheme.fontFamily.sans
            ],
            body: ['JetBrains Mono', ...defaultTheme.fontFamily.serif]
        }
    },
    plugins: []
}
