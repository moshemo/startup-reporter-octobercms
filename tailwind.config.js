module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
      },
      colors: {
        offWhite: '#fafafa',
        light: '#f5f5f5',

        grey: {
          lighter: '#eee',
          light: '#e0e0e0',
          default: '#bdbdbd',
          dark: '#9e9e9e',
          darker: '#757575',
          darkest: '#616161',
        },

        dark: '#424242',
        offBlack: '#212121',

        alpha: {
          'black-50': 'rgba(0, 0, 0, 0.04)',
          'black-100': 'rgba(0, 0, 0, 0.06)',
          'black-200': 'rgba(0, 0, 0, 0.08)',
          'black-300': 'rgba(0, 0, 0, 0.16)',
          'black-400': 'rgba(0, 0, 0, 0.24)',
          'black-500': 'rgba(0, 0, 0, 0.36)',
          'black-600': 'rgba(0, 0, 0, 0.48)',
          'black-700': 'rgba(0, 0, 0, 0.64)',
          'black-800': 'rgba(0, 0, 0, 0.80)',
          'black-900': 'rgba(0, 0, 0, 0.92)',

          'white-50': 'rgba(255, 255, 255, 0.04)',
          'white-100': 'rgba(255, 255, 255, 0.06)',
          'white-200': 'rgba(255, 255, 255, 0.08)',
          'white-300': 'rgba(255, 255, 255, 0.16)',
          'white-400': 'rgba(255, 255, 255, 0.24)',
          'white-500': 'rgba(255, 255, 255, 0.36)',
          'white-600': 'rgba(255, 255, 255, 0.48)',
          'white-700': 'rgba(255, 255, 255, 0.64)',
          'white-800': 'rgba(255, 255, 255, 0.80)',
          'white-900': 'rgba(255, 255, 255, 0.92)',
        },
        primary: {
          lightest: '#29b6f6 ',
          lighter: '#03a9f4',
          light: '#039be5',
          default: '#0288d1',
          dark: '#0277bd',
        },

        secondary: {
          lighter: '#c8e6c9',
          light: '#a5d6a7',
          default: '#81c784',
          dark: '#66bb6a',
          darker: '#4caf50',
          darkest: '#43a047',
        },

        accent: {
          lighter: '#ffd180',
          light: '#ffab40',
          default: '#ff9100',
          dark: '#ff6d00',
        },

        link: {
          base: '#2196f3',
          visited: '#8e24aa',
          hover: '#424242',
          focus: '#424242',
          active: '#424242',
        },

        error: {
          lightest: '#ffcdd2',
          lighter: '#ef9a9a',
          light: '#e57373',
          default: '#ef5350',
          dark: '#f44336',
          darker: '#e53935',
          darkest: '#d32f2f',
        },

        info: '#42a5f5',
        success: '#66bb6a',
        warning: '#ffee58',
        code: '#f44336',
      },
    },
  },
  variants: {},
  plugins: [],
}
