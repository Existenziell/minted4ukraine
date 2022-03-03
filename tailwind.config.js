module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false, 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Nunito'],
      'serif': ['Nunito'],
      'mono': ['Nunito'],
      'display': ['Nunito'],
      'body': ['Nunito']
    },
    extend: {
      colors: {
        'ukraine-blue': '#005bbc',
        'ukraine-yellow': '#ffd600',
        'highlight': '#C90076',
      },
      backgroundImage: {
        'flag': 'url(/emblem.jpg)',
        'statue': 'url(/statue.jpg)',
        'waves': 'url(/waves.svg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
