# Portfolio Website

Professional portfolio website built with React, TypeScript, and Vite. The project presents selected work, technical skills, and contact information in a responsive and performance-focused interface.

## Overview

The site is designed for clear project presentation across desktop and mobile devices. It includes animated sections, reusable UI components, and a maintainable code structure for ongoing updates.

## Core Features

- Responsive layout for mobile, tablet, and desktop
- Project showcase with visual previews and technology tags
- Reusable UI system based on shadcn/ui components
- Type-safe codebase with TypeScript
- Smooth transitions and motion using Framer Motion
- Test setup with Vitest

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vitest](https://vitest.dev/)

## Requirements

- Node.js 16+
- npm or Bun

## Getting Started

```sh
git clone <YOUR_GIT_URL>
cd my-awesome-portfolio
npm install
```

To use Bun instead:

```sh
bun install
```

Start development server:

```sh
npm run dev
```

Default local URL: http://localhost:5173

## Build and Preview

```sh
npm run build
npm run preview
```

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production bundle
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```text
src/
	components/      Reusable React components
	components/ui/   shadcn/ui components
	pages/           Route-level pages
	hooks/           Custom hooks
	lib/             Shared utilities
	index.css        Global styles
```

## Content Updates

- Update section content in files under `src/components/`
- Update global styling in `src/index.css`
- Update Tailwind configuration in `tailwind.config.ts`

## Deployment

Recommended workflow:

```sh
npm run build
```

Deploy the generated `dist/` directory to your hosting provider (for example Vercel, Netlify, or static hosting).

## License

MIT

## Author

Max Jacobsson
