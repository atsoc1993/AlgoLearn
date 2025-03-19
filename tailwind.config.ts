import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'dark-navy': '#021532',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: 'hsl(var(--code-background))', // Darker than the main background
              color: 'hsl(var(--code-foreground))', // Match the code foreground color
              boxShadow: 'none', // Ensure no box shadow
              padding: '1rem', // Add spacing for better readability
              border: '1px solid hsl(var(--border))', // Optional border
              borderRadius: '0.5rem', // Rounded corners
            },
          },
        },
        dark: {
          css: {
            pre: {
              backgroundColor: 'hsl(224, 71%, 2%)', // Specific darker background for dark mode
              color: 'hsl(213, 31%, 91%)', // Light text for readability
              border: '1px solid hsl(var(--border))', // Light border for contrast
            },
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Add tailwindcss-animate plugin
    require('@tailwindcss/typography'), // Add typography plugin
  ],
};
export default config;
