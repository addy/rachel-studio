module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    options: { safelist: ['h-screen'] },
  },
  theme: {
    extend: {
      colors: {
        aquamarine: {
          lighter: '#aafbed',
          DEFAULT: '#7afae3',
          darker: '#6fe4cf',
        },
        columbia: {
          lighter: '#d1e8f9',
          DEFAULT: '#c1e0f7',
          darker: '#b0cce1',
        },
        lilac: {
          lighter: '#dac1dc',
          DEFAULT: '#c59fc9',
          darker: '#b491b7',
        },
        mellow: {
          lighter: '#f9e38d',
          DEFAULT: '#f8dd74',
          darker: '#e2c96a',
        },
        smoke: {
          lightest: 'rgba(0, 0, 0, 0.1)',
          lighter: 'rgba(0, 0, 0, 0.25)',
          light: 'rgba(0, 0, 0, 0.4)',
          DEFAULT: 'rgba(0, 0, 0, 0.5)',
          dark: 'rgba(0, 0, 0, 0.6)',
          darker: 'rgba(0, 0, 0, 0.75)',
          darkest: 'rgba(0, 0, 0, 0.9)',
        },
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
