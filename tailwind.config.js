/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            keyframes: {
                spinEvery10Sec: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                spinEvery10Sec: 'spinEvery10Sec 5s linear infinite',
            },
        },
        fontFamily: {
            'montaga': ["Montaga", "serif"],
            'bebas': ["Bebas Neue", "sans-serif"],
            'montserrat': ["Montserrat", "sans-serif"],
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
        }
    },
    plugins: [],
}

