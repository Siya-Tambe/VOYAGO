tailwind.config = {
  darkMode: '',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f4f6f4',
          100: '#eaeee9',
          200: '#d5ded3',
          300: '#c0cdbe',
          400: '#abbda8',
          500: '#2d5a27',
          600: '#274f22',
          700: '#22441d',
          800: '#1c3918',
          900: '#172e14',
          950: '#142911',
          DEFAULT: '#2D5A27',
        },
        accent: {
          50: '#fff7f5',
          100: '#ffefec',
          200: '#ffdfda',
          300: '#ffd0c7',
          400: '#ffc0b5',
          500: '#ff6347',
          600: '#e0573e',
          700: '#c14b35',
          800: '#a33f2d',
          900: '#843324',
          950: '#752d20',
          DEFAULT: '#FF6347',
        },
        surface: {
          50: '#FFFFFF',
          100: '#F9F9F9',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
        },
        content: {
          DEFAULT: '#1A1A1A',
          muted: '#6B7280',
          subtle: '#9CA3AF',
        },
      },
    },
  },
}
