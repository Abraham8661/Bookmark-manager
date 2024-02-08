/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '550px',
      md: '800px',
      lg: '1200px',
      xl: '1440px',
    },
    fontFamily: {
      Sans: ['Lato', 'sans-serif'],
    },
      extend: {
        animation: {
          'none': 'none',
          'spin': 'spin 1s linear infinite',
          'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'bounce': 'bounce 1s infinite',
          'fade-in': 'fade-in 1s ease-out',
          'fade-out': 'fade-out 1s ease-out',
          'fade-in-up': 'fade-in-up 1s ease-out',
          'fade-out-up': 'fade-out-up 1s ease-out',
          'fade-in-down': 'fade-in-down 1s ease-out',
          'fade-out-down': 'fade-out-down 1s ease-out',
          'fade-in-left': 'fade-in-left 1s ease-out',
          'fade-out-left': 'fade-out-left 1s ease-out',
          'fade-in-right': 'fade-in-right 1s ease-out',
          'fade-out-right': 'fade-out-right 1s ease-out',
          'scale-in': 'scale-in 1s ease-out',
          'scale-out': 'scale-out 0.5s ease-out',
          'slide-up': 'slide-up 0.5s ease-out',
          'slide-down': 'slide-down 0.5s ease-out',
          'slide-left': 'slide-left 0.5s ease-out',
          'slide-right': 'slide-right 0.5s ease-out',
        },
        keyframes: {
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          ping: {
            '0%': { transform: 'scale(1)', opacity: '1' },
            '75%, 100%': { transform: 'scale(2)', opacity: '0' },
          },
          pulse: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.5' },
          },
          bounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-25%)' },
          },
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'fade-out': {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(100%)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'fade-out-up': {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(-100%)' },
          },
          'fade-in-down': {
            '0%': { opacity: '0', transform: 'translateY(-100%)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'fade-out-down': {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(100%)' },
          },
          'fade-in-left': {
            '0%': { opacity: '0', transform: 'translateX(-100%)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          'fade-out-left': {
            '0%': { opacity: '1', transform: 'translateX(0)' },
            '100%': { opacity: '0', transform: 'translateX(-100%)' },
          },
          'fade-in-right': {
            '0%': { opacity: '0', transform: 'translateX(100%)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          'fade-out-right': {
            '0%': { opacity: '1', transform: 'translateX(0)' },
            '100%': { opacity: '0', transform: 'translateX(100%)' },
          },
          'scale-in': {
            '0%': { transform: 'scale(0)' },
            '100%': { transform: 'scale(1)' },
          },
          'scale-out': {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(0)' },
          },
          'slide-up': {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          'slide-down': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(100%)' },
          },
          'slide-left': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          'slide-right': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
      },
  },
  plugins: [],
}