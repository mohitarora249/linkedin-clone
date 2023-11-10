import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B5', // LinkedIn Blue
        secondary: '#F4F4F4', // Light Grey
        accent: '#00A0DC', // Accent Blue
        text: '#333333', // Dark Text
        lightText: '#666666', // Light Text
        border: '#E5E5E5', // Border Color
        background: '#F9F9F9', // Background Color
        success: '#28A745', // Success Green
        warning: '#FFC107', // Warning Yellow
        danger: '#DC3545', // Danger Red
      },
    },
  },
  plugins: [],
}
export default config
