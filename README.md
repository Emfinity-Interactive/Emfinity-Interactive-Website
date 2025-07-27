# Emfinity Interactive Website

A modern, bilingual (English/Turkish) interactive website built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Bilingual Support**: Full English/Turkish language switching with localStorage persistence
- **Dark/Light Theme**: Automatic theme detection and manual toggle
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive Components**: Modern UI with hover effects and micro-interactions
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Vite build system for fast development and production builds

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Emfinity-Interactive/Emfinity-Interactive-Website.git
cd Emfinity-Interactive-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: English/Turkish (i18n)
- **Theme**: Dark/Light mode support

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── sections/        # Page sections (Hero, About, Projects, Contact)
│   ├── Navigation.tsx   # Main navigation component
│   ├── Footer.tsx       # Footer component
│   ├── ThemeToggle.tsx  # Theme switcher
│   └── LanguageToggle.tsx # Language switcher
├── hooks/               # Custom React hooks
│   ├── useTheme.ts      # Theme management
│   └── useLanguage.tsx  # Language management
├── types/               # TypeScript type definitions
└── App.tsx             # Main application component
```

## 🌐 Deployment

This project is optimized for deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🎨 Customization

### Adding New Languages

1. Update the `Language` type in `src/hooks/useLanguage.tsx`
2. Add translations to the `translations` object
3. Update the interface `LanguageContent` with new fields

### Theming

The project uses CSS custom properties for theming. Modify the theme colors in `src/index.css`:

```css
:root {
  --primary-blue: #3b82f6;
  --primary-turquoise: #06b6d4;
  /* Add more custom properties */
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add it to the main `App.tsx`
3. Add navigation links in `Navigation.tsx`
4. Add translations to the language system

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Emfinity Interactive**
- Website: [emfinity.com](https://emfinity.com)
- Email: hello@emfinity.com
- GitHub: [@Emfinity-Interactive](https://github.com/Emfinity-Interactive)

---

Built with ❤️ by [Emfinity Interactive](https://github.com/Emfinity-Interactive)
