# My Awesome Portfolio

A modern, responsive portfolio website showcasing projects and skills. Built with cutting-edge web technologies for optimal performance and user experience.

## 🚀 Features

- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Modern UI** - Built with shadcn/ui components for a polished interface
- **Fast Performance** - Lightning-fast development and production builds with Vite
- **Type Safe** - Full TypeScript support for reliability
- **Accessibility** - Designed with accessibility best practices in mind
- **Smooth Animations** - Enhanced user experience with carefully crafted transitions

## 🛠️ Tech Stack

- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[React](https://react.dev/)** - UI library for building interactive components
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with static typing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, reusable components
- **[Vitest](https://vitest.dev/)** - Unit testing framework

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

## 🏃 Getting Started

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd my-awesome-portfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```sh
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

```sh
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create an optimized production build
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles
```

## 🎨 Customization

### Colors & Styling

Customize the appearance by editing:
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Global styles

### Content

Update portfolio content by modifying the component files in `src/components/`

## 🚀 Deployment

### Vercel (Recommended)

```sh
npm run build
# Deploy the dist/ folder to Vercel
```

### Other Platforms

- **Netlify** - Connect your GitHub repo and set build command to `npm run build`
- **GitHub Pages** - Configure Vite for static site generation
- **Traditional Hosting** - Upload the `dist/` folder to your web server

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

---

**Built by Max Jacobsson**
