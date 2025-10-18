# Dominion City - 100 Million Souls Campaign Platform

🔥 **Strategic Digital Command Center for Kingdom Expansion** 🔥

## Overview

This Next.js application serves as the comprehensive strategic platform for Dominion City's 100 Million Souls mandate and the Night of Glory conference on November 28, 2025.

## Features

✅ Complete campaign strategy documentation  
✅ Interactive 41-day countdown to Night of Glory  
✅ Detailed Abuja evangelism mapping (all 6 councils, 70+ districts)  
✅ Real-time statistics and progress tracking  
✅ Downloadable resources (Excel trackers, strategy documents)  
✅ Prayer points and declarations  
✅ Beautiful, responsive design with animations  
✅ Single-page application with smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Deployment to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Done! Your site is live.

## Project Structure

```
dominion-city-strategy/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Main page
│   │   └── globals.css          # Global styles
│   ├── components/              # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Statistics.tsx
│   │   ├── NightOfGlory.tsx
│   │   ├── HundredMillion.tsx
│   │   ├── AbujaStrategy.tsx
│   │   ├── Resources.tsx
│   │   └── Footer.tsx
│   └── data/                    # Data files
│       ├── campaignData.ts
│       ├── phasesData.ts
│       └── resourcesData.ts
├── public/                      # Static assets
│   └── favicon.ico
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Adding Download Links

Edit `src/data/resourcesData.ts` and add your Google Drive links:

```typescript
downloadLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
```

### Updating Logos

1. Replace `public/favicon.ico` with church logo (16x16, 32x32, 48x48 px)
2. Add `public/logo.png` for full church logo
3. Add `public/flyer.jpg` for Night of Glory flyer

### Color Scheme

The branding uses Dominion City colors:
- Primary Blue: `#0A1F5E`
- Light Blue: `#1E4A9F`
- Gold: `#FFB800`

Edit `tailwind.config.js` to customize colors.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React CountUp** - Number animations

## Key Sections

1. **Hero** - Dynamic countdown and introduction
2. **Statistics** - Live metrics for Night of Glory and 100M campaign
3. **Night of Glory** - 41-day action plan and event details
4. **100 Million Souls** - 5-year strategic roadmap
5. **Abuja Strategy** - Complete breakdown of all councils and phases
6. **Resources** - Downloadable documents and tools
7. **Prayer Points** - Declarations and scripture foundations

## Performance

- Optimized for mobile and desktop
- Fast loading with Next.js optimization
- Smooth animations and transitions
- SEO-friendly with proper meta tags

## Support

For technical issues or questions:
- Review this README
- Check Next.js documentation: https://nextjs.org/docs
- Vercel deployment guide: https://vercel.com/docs

## License

© 2025 Dominion City. All rights reserved.

---

**"For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea." - Habakkuk 2:14**

🔥 **100 MILLION SOULS FOR JESUS!** 🔥
