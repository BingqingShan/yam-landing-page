import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================================================
      // COLORS - Ponpon Mania Inspired (Experimental)
      // ============================================================================
      colors: {
        // Background hierarchy
        bg: {
          deep: '#7E7EFF',    // Ponpon Blue
          surface: '#F894C0', // Ponpon Pink
          elevated: '#FFFFFF',
          hover: '#FBCFE8',
        },
        // Text hierarchy
        text: {
          primary: '#0D0D0F',
          secondary: '#4B5563',
          muted: '#9CA3AF',
        },
        // Accent colors
        accent: {
          primary: '#F894C0', // Pink
          secondary: '#7E7EFF', // Blue
          tertiary: '#000000',
        },
        // Experience type colors (remapping to match palette)
        type: {
          quiz: '#F894C0',
          trivia: '#7E7EFF',
          poll: '#F894C0',
          personality: '#7E7EFF',
          story: '#F894C0',
          clicker: '#7E7EFF',
          'this-or-that': '#000000',
        },
        // Creator progression colors
        rank: {
          bronze: '#CD7F32',
          silver: '#C0C0C0',
          gold: '#FFD700',
          platinum: '#E5E4E2',
          diamond: '#B9F2FF',
        },
        // Decorative
        sparkle: '#FFE066',
        // Semantic colors
        success: '#34D399',
        warning: '#FBBF24',
        error: '#F87171',
        info: '#60A5FA',
        // Legacy support (for gradual migration)
        background: '#0D0D0F',
        foreground: '#EDEDEF',
        card: {
          DEFAULT: '#16161A',
          foreground: '#EDEDEF',
        },
        popover: {
          DEFAULT: '#1E1E24',
          foreground: '#EDEDEF',
        },
        primary: {
          DEFAULT: '#FF6B4A',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#A855F7',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1E1E24',
          foreground: '#8B8B9A',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: '#2A2A32',
        input: '#2A2A32',
        ring: '#FF6B4A',
      },

      // ============================================================================
      // TYPOGRAPHY
      // ============================================================================
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },

      // ============================================================================
      // SPACING & SIZING
      // ============================================================================
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      // ============================================================================
      // SHADOWS & GLOWS
      // ============================================================================
      boxShadow: {
        // Hard comic shadows
        'comic': '4px 4px 0px 0px #000000',
        'comic-lg': '8px 8px 0px 0px #000000',
        'comic-hover': '6px 6px 0px 0px #000000',
        
        glow: '0 0 20px rgba(248, 148, 192, 0.3)',
        'glow-lg': '0 0 40px rgba(248, 148, 192, 0.4)',
        'glow-purple': '0 0 20px rgba(126, 126, 255, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 0, 0, 0.1)',
        // Per-type glows
        'glow-quiz': '0 0 20px rgba(248, 148, 192, 0.3)',
        'glow-trivia': '0 0 20px rgba(126, 126, 255, 0.3)',
        'glow-poll': '0 0 20px rgba(248, 148, 192, 0.3)',
        'glow-personality': '0 0 20px rgba(126, 126, 255, 0.3)',
        'glow-story': '0 0 20px rgba(248, 148, 192, 0.3)',
        'glow-clicker': '0 0 20px rgba(126, 126, 255, 0.3)',
        'glow-this-or-that': '0 0 20px rgba(0, 0, 0, 0.1)',
      },

      // ============================================================================
      // ANIMATIONS
      // ============================================================================
      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 74, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 74, 0.5)' },
        },
        'streaming-dot': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'scale-in': {
          from: { transform: 'scale(0.9)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        'sparkle-float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translateY(-6px) scale(1.2)', opacity: '1' },
        },
        'progress-fill': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-out forwards',
        'slide-up': 'slide-up 0.3s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'streaming-dot': 'streaming-dot 1.4s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.2s ease-out forwards',
        'sparkle-float': 'sparkle-float 3s ease-in-out infinite',
        'progress-fill': 'progress-fill 1s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
