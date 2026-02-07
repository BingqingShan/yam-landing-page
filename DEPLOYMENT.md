# YAM Landing Page - Deployment Guide

## 🎉 Repository Created Successfully!

**GitHub Repository**: https://github.com/BingqingShan/yam-landing-page

---

## 📁 Project Structure

```
yam-landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & design system
│   │   ├── layout.tsx           # Root layout with fonts
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx      # Hero with character parade
│   │   │   ├── TypeShowcase.tsx     # 7 experience types grid
│   │   │   ├── HowItWorks.tsx       # 3-step process
│   │   │   ├── PlatformTargets.tsx  # Deployment platforms
│   │   │   └── CTAFooter.tsx        # Call to action
│   │   └── ui/
│   │       ├── ExperienceCharacter.tsx  # SVG character component
│   │       └── characterShapes.ts       # Character geometry data
│   └── lib/
│       └── utils.ts             # Utility functions (cn)
├── package.json                 # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── postcss.config.mjs          # PostCSS config
├── .gitignore                  # Git ignore rules
└── README.md                   # Documentation

```

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/BingqingShan/yam-landing-page.git
cd yam-landing-page
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see the landing page!

---

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub account
4. Select `BingqingShan/yam-landing-page`
5. Click "Deploy"

**Done!** Your landing page will be live at `your-project.vercel.app`

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select the repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

### Option 3: Manual Build

```bash
npm run build
npm start
```

This will create an optimized production build.

---

## 🎨 Design System Overview

### Color Palette

**Backgrounds:**
- Deep: `#0D0D0F`
- Surface: `#16161A`
- Elevated: `#1E1E24`
- Hover: `#26262E`

**Accents:**
- Primary (Coral): `#FF6B4A` - Used for CTAs
- Secondary (Purple): `#A855F7` - AI features
- Tertiary (Cyan): `#22D3EE` - Interactive elements

**Experience Types:**
- Quiz: `#818CF8` (Indigo)
- Trivia: `#F87171` (Red)
- Poll: `#60A5FA` (Blue)
- Personality: `#C084FC` (Purple)
- This or That: `#FBBF24` (Amber)
- Story: `#F472B6` (Pink)
- Clicker: `#34D399` (Green)

### Typography

- **Display Font**: Space Grotesk - Bold, geometric headings
- **Body Font**: Inter - Clean, readable body text

### Features

✨ **Animated Characters**: 7 unique geometric mascots with bounce animations
🌈 **Gradient Text**: Multi-color gradient effects on headlines
💫 **Glow Effects**: Neon glow shadows on hover states
📱 **Fully Responsive**: Mobile-first design that works on all devices
⚡ **Lightning Fast**: Server components, zero client-side JS
🎯 **SEO Optimized**: Semantic HTML and meta tags

---

## 📝 Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    primary: '#FF6B4A',  // Change this!
    secondary: '#A855F7',
    tertiary: '#22D3EE',
  },
}
```

### Modify Content

All text content is in the component files:
- Hero text: `src/components/landing/HeroSection.tsx`
- Experience types: `src/components/landing/TypeShowcase.tsx`
- Steps: `src/components/landing/HowItWorks.tsx`
- Platforms: `src/components/landing/PlatformTargets.tsx`
- CTA: `src/components/landing/CTAFooter.tsx`

### Add New Characters

Edit `src/components/ui/characterShapes.ts` to add new geometric shapes.

---

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.7
- **Fonts**: Google Fonts (Space Grotesk + Inter)
- **Icons**: Custom SVG characters

---

## 📊 Performance

- ✅ Zero client-side JavaScript (server components)
- ✅ Optimized fonts with `next/font`
- ✅ Automatic image optimization
- ✅ CSS-only animations
- ✅ Minimal bundle size

---

## 🤝 Contributing

This is a standalone landing page repository. Feel free to:
- Fork the repository
- Make changes
- Submit pull requests
- Report issues

---

## 📄 License

MIT License - feel free to use this for your own projects!

---

## 🔗 Links

- **Repository**: https://github.com/BingqingShan/yam-landing-page
- **Live Demo**: Deploy to Vercel to get your live URL
- **Original Project**: Based on YAM for Creator design system

---

## 💡 Next Steps

1. ✅ Repository created and pushed to GitHub
2. 🚀 Deploy to Vercel or Netlify
3. 🎨 Customize colors and content to match your brand
4. 📱 Test on mobile devices
5. 🔍 Add Google Analytics (optional)
6. 🌐 Connect custom domain (optional)

---

**Built with ❤️ using the Neon Craft v4 Design System**
