# Style Branches Guide

## 🎨 Branch Strategy for Landing Page Styles

I've created multiple branches so you can experiment with different design styles and easily compare them!

---

## 📊 Available Branches

### 1. **`main`** (Current Production)
- **Status**: ✅ Production-ready
- **Style**: Neon Craft v4 - Dark theme with coral accents
- **Use Case**: Current live version
- **URL**: https://github.com/BingqingShan/yam-landing-page/tree/main

---

### 2. **`style/minimal-light`**
- **Style Concept**: Minimal, clean, light theme
- **Suggested Changes**:
  - Light background (#FFFFFF or #F9FAFB)
  - Simple sans-serif typography
  - Subtle shadows instead of glows
  - Minimal animations
  - Professional, corporate feel
- **URL**: https://github.com/BingqingShan/yam-landing-page/tree/style/minimal-light

---

### 3. **`style/vibrant-neon`**
- **Style Concept**: Ultra-vibrant cyberpunk aesthetic
- **Suggested Changes**:
  - Intense neon colors (hot pink, electric blue, lime green)
  - Strong glow effects everywhere
  - More dramatic animations
  - Grid patterns in background
  - 80s retro-futuristic vibe
- **URL**: https://github.com/BingqingShan/yam-landing-page/tree/style/vibrant-neon

---

### 4. **`style/gradient-modern`**
- **Style Concept**: Modern gradients with glass morphism
- **Suggested Changes**:
  - Colorful gradient backgrounds
  - Glassmorphism effects (frosted glass look)
  - Smooth color transitions
  - Blur effects
  - Contemporary, trendy aesthetic
- **URL**: https://github.com/BingqingShan/yam-landing-page/tree/style/gradient-modern

---

### 5. **`style/experimental`**
- **Style Concept**: Wild, creative experiments
- **Use Case**: Try bold, unconventional ideas
- **Freedom**: Go crazy! Test anything
- **URL**: https://github.com/BingqingShan/yam-landing-page/tree/style/experimental

---

## 🔧 How to Work with Style Branches

### Switch Between Branches

```bash
# Go to your project directory
cd yam-landing-page

# List all branches
git branch -a

# Switch to a style branch
git checkout style/minimal-light

# Start development server to see changes
npm run dev
```

### Make Style Changes

```bash
# 1. Switch to the branch you want to modify
git checkout style/vibrant-neon

# 2. Make your changes to:
#    - tailwind.config.ts (colors)
#    - src/app/globals.css (styles)
#    - Component files (structure)

# 3. See changes live
npm run dev

# 4. Commit your changes
git add .
git commit -m "Update vibrant neon color palette"
git push
```

### Compare Branches

```bash
# Compare two branches
git diff main..style/minimal-light

# Or view on GitHub
# Go to: https://github.com/BingqingShan/yam-landing-page/branches
```

### Create a New Style Branch

```bash
# Start from main
git checkout main

# Create new branch
git checkout -b style/my-custom-style

# Make changes, then push
git push -u origin style/my-custom-style
```

---

## 🎯 Quick Style Customization Guide

### Change Colors (all branches)

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    primary: '#FF6B4A',    // Main CTA color
    secondary: '#A855F7',   // Secondary accent
    tertiary: '#22D3EE',    // Tertiary accent
  },
  bg: {
    deep: '#0D0D0F',        // Darkest background
    surface: '#16161A',      // Card backgrounds
    elevated: '#1E1E24',     // Raised elements
    hover: '#26262E',        // Hover states
  },
}
```

### Change Fonts

Edit `src/app/layout.tsx`:

```typescript
// Replace Space_Grotesk with another font
import { Inter, Playfair_Display } from 'next/font/google'

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})
```

### Adjust Animations

Edit `tailwind.config.ts` animation section or `src/app/globals.css` keyframes.

### Modify Component Styles

Each landing section has its own file in `src/components/landing/`:
- `HeroSection.tsx` - Top hero area
- `TypeShowcase.tsx` - Experience cards
- `HowItWorks.tsx` - Process steps
- `PlatformTargets.tsx` - Platform cards
- `CTAFooter.tsx` - Bottom CTA

---

## 🚀 Deploy Different Styles

### Option 1: Deploy Each Branch Separately on Vercel

1. Go to Vercel dashboard
2. Create new project for each branch:
   - `yam-landing-minimal` → Deploy from `style/minimal-light`
   - `yam-landing-neon` → Deploy from `style/vibrant-neon`
   - etc.
3. Compare live versions!

### Option 2: Use Vercel Branch Previews

Vercel automatically creates preview URLs for each branch:
- Main: `yam-landing.vercel.app`
- Branch: `yam-landing-git-style-minimal-light.vercel.app`

---

## 📋 Workflow Example

### Scenario: Create a Minimal Light Theme

```bash
# 1. Switch to the minimal-light branch
git checkout style/minimal-light

# 2. Edit colors in tailwind.config.ts
# Change backgrounds to light colors:
bg: {
  deep: '#FFFFFF',
  surface: '#F9FAFB',
  elevated: '#F3F4F6',
  hover: '#E5E7EB',
}

# Change text colors:
text: {
  primary: '#111827',
  secondary: '#6B7280',
  muted: '#9CA3AF',
}

# 3. Test locally
npm run dev

# 4. Commit changes
git add tailwind.config.ts
git commit -m "Convert to light theme with minimal colors"
git push

# 5. View on GitHub or deploy to Vercel to compare!
```

---

## 🔍 Review & Compare

### On GitHub

Visit: https://github.com/BingqingShan/yam-landing-page/branches

- See all branches
- Click "Compare" to see differences
- View pull requests to compare styles side-by-side

### Locally

```bash
# View all branches
git branch -a

# Compare files between branches
git diff main..style/minimal-light -- tailwind.config.ts
```

---

## 💡 Style Branch Ideas

### For `style/minimal-light`:
- ✨ Light backgrounds (#FFFFFF, #F9FAFB)
- 🎨 Subtle blue accents (#3B82F6)
- 📏 More whitespace
- 🖼️ Drop shadows instead of glows
- 📱 Professional, clean aesthetic

### For `style/vibrant-neon`:
- 🌈 Hot pink (#FF10F0), electric blue (#00F0FF)
- ⚡ Intense glow effects
- 🎭 More dramatic animations
- 🌃 Grid background patterns
- 🎮 Cyberpunk/gaming aesthetic

### For `style/gradient-modern`:
- 🎨 Gradient backgrounds (purple → pink → orange)
- 💎 Glassmorphism cards (backdrop-blur)
- 🌊 Smooth transitions
- ✨ Modern, trendy feel
- 📱 iOS/macOS inspired

### For `style/experimental`:
- 🎪 Try anything wild!
- 🎨 Unconventional color combinations
- 🎭 Unique layouts
- ⚡ Creative animations
- 🎯 Push boundaries

---

## 📝 Merging Styles Back to Main

When you find a style you love:

```bash
# 1. Make sure you're on the style branch
git checkout style/minimal-light

# 2. Create a pull request on GitHub
# Go to: https://github.com/BingqingShan/yam-landing-page
# Click "Pull requests" → "New pull request"
# Select: base: main ← compare: style/minimal-light

# 3. Review changes, then merge

# OR merge locally:
git checkout main
git merge style/minimal-light
git push
```

---

## 🎯 Quick Commands Reference

```bash
# List all branches
git branch -a

# Switch branch
git checkout style/minimal-light

# Create new style branch
git checkout -b style/new-style

# Push branch to GitHub
git push -u origin style/new-style

# Compare branches
git diff main..style/minimal-light

# Delete a branch (if you don't need it)
git branch -d style/old-style
git push origin --delete style/old-style
```

---

## ✅ Current Branch Status

All style branches are now available on GitHub:

- ✅ `main` - Production (Neon Craft v4)
- ✅ `style/minimal-light` - Ready for light theme
- ✅ `style/vibrant-neon` - Ready for neon aesthetic  
- ✅ `style/gradient-modern` - Ready for gradient style
- ✅ `style/experimental` - Ready for experiments

**Start experimenting with different styles now!** 🎨

---

## 🔗 Useful Links

- **Repository**: https://github.com/BingqingShan/yam-landing-page
- **All Branches**: https://github.com/BingqingShan/yam-landing-page/branches
- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Google Fonts**: https://fonts.google.com

---

**Happy styling! 🎨✨**
