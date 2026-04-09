# SochauX - IT Solutions Studio

<div align="center">
  <img src="public/logo.jpeg" alt="SochauX Logo" width="80" />
  <p>
    <strong>Building the Future, One System at a Time</strong>
  </p>
  <p>
    A modern, multi-page website for SochauX - an IT solutions studio specializing in system design, web development, SaaS platforms, and school management solutions.
  </p>
</div>

---

## 🚀 Features

- **Multi-page Architecture** - Clean routing with React Router
- **Modern Design** - Sleek UI with Tailwind CSS
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Responsive** - Mobile-first approach, works on all devices
- **Performance** - Optimized with Vite build tooling
- **Animated** - Smooth entrance animations and micro-interactions

## 📁 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with all sections |
| Services | `/services` | Detailed service offerings |
| Projects | `/projects` | Portfolio with filtering |
| About | `/about` | Company story and team |
| Contact | `/contact` | Contact form and info |

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/anitstha/sochaux.git

# Navigate to project directory
cd sochaux

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
sochaux/
├── public/
│   └── logo.jpeg
├── src/
│   ├── assets/           # Static assets
│   ├── components/       # Reusable components
│   │   ├── icons/       # Custom icon components
│   │   ├── Loader.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/          # React context providers
│   ├── data/             # Static data files
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── AboutPage.jsx

│   │   └── ContactPage.jsx
│   ├── sections/         # Section components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎨 Customization

### Adding Team Members

Edit `src/data/siteData.js`:

```javascript
export const team = [
  {
    name: "Your Name",
    role: "Your Role",
    bio: "Brief bio here",
    github: "https://github.com/username",
    image: yourImage, // import and use local image
  },
];
```

### Adding Projects

Edit `src/data/projectsData.js`:

```javascript
export const projects = [
  {
    title: "Project Name",
    category: "Category",
    description: "Project description",
    tags: ["React", "Node.js"],
    color: "from-blue-500 to-cyan-600",
    image: "https://...",
  },
];
```

### Theme Colors

Edit `src/index.css` to customize theme colors:

```css
@theme {
  --color-primary: #0a0a0a;
  --color-secondary: #6b7280;
  --color-accent: #c8a165;
  --color-card: #141414;
  --color-border: #262626;
}
```

## 👥 Team

- **Anit Shrestha** - Co-Founder
- **Bhim Raj Bhandari** - Co-Founder
- **Sudip Dahal** - Co-Founder

## 📄 License

This project is private and proprietary. All rights reserved.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/anitstha">SochauX Team</a></p>
</div>
