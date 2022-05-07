module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E5',
        },
      },
      borderRadius: {
        md: '4px',
      },
      width: {
        88: '22rem',
      },
      maxWidth: {
        '7xl': '1168px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
