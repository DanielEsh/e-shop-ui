module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#ffd139',
        '500': '#fbbf24',
      },
      dark: {
        '100': '#525252',
        '200': '#404040',
        '300': '#262626',
        '400': '#1c1917',
        '500': '#161616',
      },
      light: {
        '100': '#a1a1aa',
        '200': '#d4d4d8',
        '300': '#e4e4e7',
        '400': '#f4f4f5',
        '500': '#fafafa',
      },
      gray: {
        '100': '#e5e7eb',
        '200': '#d1d5db',
        '300': '#9ca3af',
        '400': '#6b7280',
        '500': '#303842',
      },
      success: {
        '400': '#4ade80',
        '500': '#22c55e',
      },
      error: {
        '400': '#ef4444',
        '500': '#dc2626',
      },
      link: {
        '500': '#1890ff',
        '400': '#40a9ff',
      },
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    fontSize: {
      h1: '80px',
      h2: '60px',
      h3: '40px',
      h4: '20px',
      h5: '16px',
      h6: '14px',
    },
    keyframes: {
      ripple: {
        to: {
          opacity: '0',
          transform: 'scale(2)',
        },
      },
    },
    animation: {
      ripple: 'ripple .8s ease-in-out',
    },
    extend: {
      translate: {
        '2.5': '-1.25rem',
      },
    },
  },
  plugins: [],
}
