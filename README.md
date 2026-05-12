# Next.js + Shadcn/ui + Tailwind CSS Starter

A modern, production-ready starter template for building web applications with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** components.

## Features

✨ **Modern Stack**
- [Next.js 16.2.6](https://nextjs.org) with App Router & Turbopack
- [React 19.2.4](https://react.dev) with latest hooks
- [TypeScript 5](https://www.typescriptlang.org) with strict mode
- [Tailwind CSS v4](https://tailwindcss.com) with custom design tokens
- [shadcn/ui](https://ui.shadcn.com) - 55+ accessible components

🎨 **Theme & Styling**
- Dark/Light mode with [next-themes](https://github.com/pacocoursey/next-themes)
- CSS custom properties for design tokens (color, spacing, radius)
- OKLch color space support
- Responsive design with mobile-first approach

📦 **Built-in Features**
- Toast notifications with [sonner](https://sonner.emilkowal.ski)
- Tooltips with [Radix UI](https://www.radix-ui.com)
- Form handling & validation ready
- Accessible components with ARIA labels
- Server & Client component patterns

🏗️ **Architecture**
- Route groups for logical area separation (auth, public, shell)
- Reusable layout components per area
- Shared component library
- Organized section components
- Barrel exports for clean imports

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
src/
├── app/
│   ├── (auth)/               # Authentication route group
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   └── layout.tsx        # Auth layout wrapper
│   │
│   ├── (public)/             # Public route group
│   │   ├── page.tsx          # Landing page
│   │   ├── features/
│   │   ├── pricing/
│   │   ├── faq/
│   │   ├── contact/
│   │   └── layout.tsx        # Public layout wrapper
│   │
│   ├── (shell)/              # App shell route group
│   │   ├── dashboard/
│   │   ├── settings/
│   │   ├── profile/
│   │   ├── users/
│   │   ├── analytics/
│   │   └── layout.tsx        # Shell layout wrapper
│   │
│   └── layout.tsx            # Root layout with providers
│
├── components/
│   ├── (auth)/               # Auth-specific sections
│   │   ├── login/
│   │   ├── signup/
│   │   └── layout/
│   │
│   ├── (public)/             # Public-specific sections
│   │   ├── hero-section.tsx
│   │   ├── layout/
│   │   └── ...
│   │
│   ├── (shell)/              # Shell-specific sections
│   │   ├── layout/
│   │   ├── settings/
│   │   └── ...
│   │
│   ├── shared/               # Shared across all areas
│   │   ├── layout/           # Header, Footer, Sidebar, ThemeToggle, AvatarMenu
│   │   ├── form-fields/      # Form components
│   │   ├── cards/            # Card components
│   │   ├── modals/           # Modal components
│   │   ├── tables/           # Table components
│   │   ├── charts/           # Chart components
│   │   └── buttons/          # Custom button variants
│   │
│   ├── ui/                   # shadcn/ui components
│   └── providers.tsx         # Global providers (Theme, Tooltips, Toasts)
│
├── lib/
│   └── utils.ts              # Utility functions
│
└── globals.css               # Design tokens & global styles
```

## Available Scripts

```bash
# Development
npm run dev       # Start dev server with hot reload

# Production
npm run build     # Build for production
npm run start     # Start production server

# Code Quality
npm run lint      # Run ESLint
```

## Customization

### Design Tokens
Edit `src/globals.css` to customize:
- Color palette (oklch format)
- Typography scales
- Spacing system
- Border radius
- Animation durations

### Add shadcn Components
```bash
npx shadcn-ui@latest add <component-name>
```

### Create New Route Group
1. Create folder: `src/app/(area)/page-name/`
2. Create layout: `src/components/(area)/layout/`
3. Create sections: `src/components/(area)/page-name/`

## Dark Mode

Dark mode is automatically integrated with next-themes. Users can toggle between light, dark, and system preferences. The theme is stored in localStorage and applied via the `.dark` class.

## Deployment

Deploy easily to [Vercel](https://vercel.com) (recommended for Next.js):

```bash
npm install -g vercel
vercel
```

Or deploy to any Node.js-compatible platform (AWS, Heroku, Railway, etc.)

## Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## License

MIT
