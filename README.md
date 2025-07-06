# Powow - Story Sharing Platform

A modern web platform for sharing and discovering amazing stories and innovative projects. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Story Sharing**: Create and share detailed stories about projects and experiences
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dynamic Routing**: Individual story pages with dynamic content
- **Modern UI**: Beautiful, accessible interface with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Next.js App Router and modern web technologies

## 📁 Project Structure

```
/
├── app/                       # Next.js app router
│   ├── layout.tsx             # Base layout (Nav, Footer)
│   ├── page.tsx               # Homepage
│   └── stories/               # Dynamic route for stories
│       └── [slug]/
│           └── page.tsx       # Individual story pages
├── components/                 # Reusable components
│   ├── Nav.tsx               # Navigation component
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── ProjectCard.tsx       # Project card component
│   └── Modal.tsx             # Modal component
├── public/                     # Static files
│   ├── favicon.ico           # Favicon
│   └── images/               # Image assets
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
├── styles/                     # Global styles
│   └── globals.css           # Tailwind config + global CSS
├── utils/                      # Helper functions
│   ├── helpers.ts            # Common utilities
│   └── api.ts                # API utilities
├── product.md                  # Product Requirements Document
├── debug-log.md               # Development debug log
└── README.md                  # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd powow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📖 Usage

### Homepage
The homepage features a hero section with call-to-action buttons and a grid of featured stories.

### Story Pages
Individual story pages are accessible via `/stories/[slug]` where `[slug]` is the story identifier.

### Components
All components are reusable and located in the `components/` directory:

- **Nav**: Responsive navigation with mobile menu
- **Footer**: Footer with links and social media
- **Hero**: Hero section with gradient background
- **ProjectCard**: Card component for displaying projects
- **Modal**: Reusable modal component

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. The primary color palette can be customized:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Styling
Global styles and custom utilities are in `styles/globals.css`. You can add custom CSS classes and Tailwind utilities here.

### Content
Update the mock data in the components to display your own content:

- Featured projects in `app/page.tsx`
- Story content in `app/stories/[slug]/page.tsx`
- Navigation links in `components/Nav.tsx`

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### TypeScript
TypeScript configuration is in `tsconfig.json`. The project uses strict mode and includes path mapping for clean imports.

### Tailwind CSS
Tailwind configuration is in `tailwind.config.js` with custom color palette and content paths.

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Single column layout, hamburger menu
- **Tablet**: Two-column grid for project cards
- **Desktop**: Three-column grid, full navigation

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 📈 Performance

- **Images**: Optimized with Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Components load on demand
- **SEO**: Built-in metadata and structured data support

## 🧪 Testing

### Unit Tests
Test utility functions and components:

```bash
npm test
```

### E2E Tests
Test user workflows and interactions:

```bash
npm run test:e2e
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Heroicons](https://heroicons.com/) for the beautiful icons

## 📞 Support

If you have any questions or need help, please:

1. Check the [debug-log.md](debug-log.md) for known issues
2. Review the [product.md](product.md) for feature roadmap
3. Open an issue on GitHub
4. Contact the development team

---

**Built with ❤️ using Next.js and Tailwind CSS** 