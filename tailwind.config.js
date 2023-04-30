/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        // "lg-max": { max: "960px" },
        xl: '1140px',
        '2xl': '1320px',
      },
      container: {
        center: true,
        padding: '10px',
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          // "lg-max": { max: "960px" },
          xl: '1140px',
          '2xl': '1320px',
        },
      },
      colors: {
        lightBlue: '#DAE1E9',
        trueblue: '#005079',
        darkBlue: '#080609',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#31A3DD',
          // 'primary-outline': 'FC2B2B',
          // "primary-focus": "#2B7A99",
          // "primary-content": "#ffffff",
          // "primary-content": "#cfffa8",
          // "primary-focus": "red",
          secondary: '#fee440',
          'secondary-focus': '#fee440',
          // 'secondary-content': '#606c38',
          accent: '#37CDFF',
          'accent-focus': '#2AAFCB',
          'accent-content': '#ffffff',
          neutral: '#31A3DD',
          'neutral-focus': '#278fee',
          'neutral-content': '#ffffff',
          Grey: 'FF5724',
          'base-100': '#ffffff',
          'base-200': '#F3F4F6',
          'base-300': '#D1D5DB',
          'base-content': '#1F2937',
          info: '#2094F3',
          warning: '#fee440',
          error: '#FF5724',
          '.btn-ghost:hover, btn-ghost:focus, .btn-ghost.btn-active': {
            'background-color': '#ffffff',
            color: '#1F2937',
          },
        },
      },
    ],
  },
  safelist: ['btn-outline'], // add classes here that are not generated by tailwind
}
