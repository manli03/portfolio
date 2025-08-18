/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on 'dark' class on HTML element
  content: [
    './*.html', // Path to your HTML files
    // Add other paths if you have separate JS/TS files that use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        // Base colors for Light Mode (these are the defaults)
        'background-light': '#F8F9FA', // Light background for body
        'card-light': '#FFFFFF', // White for cards/sections
        'text-dark-primary': '#1A202C', // Very dark gray for headings/main text
        'text-dark-secondary': '#4A5568', // Medium dark gray for paragraphs/muted text
        'border-light': '#E2E8F0', // Light gray for borders

        // Accent Colors (these should work well in both modes, but can be overridden)
        'accent-main': '#10B981', // Emerald 500
        'accent-hover': '#059669', // Emerald 600

        // Dark Mode Overrides (prefixed with 'dark-')
        'dark-background': '#1A202C', // Deep charcoal for dark mode body
        'dark-card': '#2D3748', // Slightly lighter charcoal for dark mode cards
        'dark-text-light-primary': '#F7FAFC', // Light text for headings/main text in dark mode
        'dark-text-light-secondary': '#CBD5E0', // Muted light text for paragraphs in dark mode
        'dark-border': '#4A5568', // Darker gray for borders in dark mode
        'dark-accent-main': '#34D399', // Brighter emerald for dark mode accent (Emerald 400)
        'dark-accent-hover': '#10B981', // Original accent as dark mode hover
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A clean, modern sans-serif font
        heading: ['Inter', 'sans-serif'], // You can use a different font for headings if desired
      },
      boxShadow: {
        custom:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Default small shadow
        'lg-custom':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Larger shadow
      },
    },
  },
  plugins: [],
};
