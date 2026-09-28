export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: { 400: '#F6A035', 500: '#EE8B1B', 600: '#D9730D' },
        gold: { 300: '#EBCB7A', 400: '#D9AE45', 500: '#C39A2F', 600: '#A47D1F' },
        cream: { 50: '#FFFBF3', 100: '#FDF4E3', 200: '#F8E8C8' },
        maroon: { 700: '#6B1E1E', 800: '#4E1414', 900: '#320C0C' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
        deva: ['"Tiro Devanagari Marathi"', '"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
