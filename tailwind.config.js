/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        }
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px #d1d9e6, -8px -8px 16px #f8f9fa',
        'neumorphic-inset': 'inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f8f9fa'
      }
    }
  },
  plugins: []
}

