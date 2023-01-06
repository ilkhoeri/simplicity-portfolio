module.exports = {
    content: ['./public/**/*.{html,js}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#14b8a6',
                secondary: '#64748b',
                dark: '#0f172a',
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#ecebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
                'rainbow': 'from-indigo-500 via-purple-500 to-pink-500'
            },
            backgroundImage: (theme) => ({
                'gradient-secondary': `linear-gradient(to right, ${theme('colors.orange')}, ${theme('colors.blue')})`,
            }),
            screens: {
                '2xl': '1320px',
            },
        },
    },
    Plugins: [],

};