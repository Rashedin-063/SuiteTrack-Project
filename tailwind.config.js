module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBackground: '#E2E1DF',
        lightPrimary: '#1A1A1D',
        lightSecondary: '#1D24CA',

        darkBackground: '#0D1224',
        darkPrimary: '#FEF9F2',
        darkSecondary: '#F72798',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
