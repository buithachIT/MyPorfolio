# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode
- 🌐 Multi-language support (Vietnamese/English)
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎨 Beautiful UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-buithach.git
cd portfolio-buithach
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio-buithach/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   │   ├── layout/         # Layout components
│   │   └── ui/            # UI components
│   ├── contexts/           # React contexts
│   ├── translations/       # Language translations
│   └── styles/            # Global styles
├── public/                 # Static files
└── package.json           # Dependencies and scripts
```

## Adding New Translations

1. Open `src/translations/index.ts`
2. Add new translations to the `translations` object:

```typescript
export const translations = {
  vn: {
    // Vietnamese translations
  },
  en: {
    // English translations
  },
};
```

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        // Add more custom colors
      },
    },
  },
};
```

### Adding New Sections

1. Create a new component in `src/app/home/sections/`
2. Add translations for the new section
3. Import and use the component in `src/app/home/page.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Công Thạch

Project Link: [https://github.com/buithachIT/MyPorfolio](https://github.com/buithachIT/MyPorfolio)
