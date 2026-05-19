# Likhitha Endla - Portfolio

A modern, professional portfolio website for a Senior Software Test Automation Engineer | SDET with 7+ years of enterprise QA automation experience.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: React 18
- **Theme**: next-themes (Dark/Light toggle)
- **SEO**: next-seo
- **Icons**: React Icons

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Header, Footer, Navigation, ThemeToggle
│   ├── sections/           # Hero, About, Skills, Experience, Projects, etc.
│   ├── cards/              # SkillCard, ExperienceCard, ProjectCard
│   ├── ui/                 # Button, Badge, Section, Timeline
│   └── common/             # ScrollFadeIn, etc.
├── data/
│   ├── personal.ts         # Name, title, contact info
│   ├── skills.ts           # Skill categories and items
│   ├── experience.ts       # Work history and timeline
│   └── projects.ts         # Featured projects
├── config/
│   └── seo.ts              # SEO configuration
└── styles/
    ├── globals.css         # Global styles
    └── animations.css      # Animation definitions
```

## 🎨 Features

- ✅ Dark/Light mode toggle (dark-first design)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with next-seo
- ✅ Minimal, elegant animations
- ✅ Data-driven content structure
- ✅ Professional enterprise QA automation focus
- ✅ Recruiter & freelance-friendly
- ✅ Smooth scroll navigation
- ✅ Contact form integration ready
- ✅ LinkedIn & GitHub integration

## 🛠️ Setup & Installation

1. **Clone or download** this project to your local machine
2. **Navigate** to the project directory:
   ```bash
   cd portfolio
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables** (optional):
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```
6. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and deploys

## 🎯 Customization

### Update Personal Information
Edit `src/data/personal.ts`:
```typescript
export const personal = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Update Skills
Edit `src/data/skills.ts` to add, remove, or modify skill categories and items.

### Update Experience
Edit `src/data/experience.ts` to update work history, clients, and achievements.

### Update Projects
Edit `src/data/projects.ts` to add, modify, or remove featured projects.

### Customize Colors
Edit `tailwind.config.ts` to change the color palette (currently dark navy, indigo, cyan).

## 📄 Pages & Sections

- **Hero**: Full-height introduction with CTA buttons
- **About**: Professional bio highlighting expertise
- **Skills**: Categorized skill cards with progress indicators
- **Experience**: Timeline of work history with clients and achievements
- **Projects**: Featured portfolio projects with tech stack
- **Certifications**: Relevant certifications and achievements
- **Education**: Educational background
- **Contact**: Contact information and form
- **Footer**: Professional tagline and social links

## 🔗 Social Links

- **LinkedIn**: https://www.linkedin.com/in/likhitha-endla-64108580/
- **GitHub**: https://github.com/likhithaendla
- **Email**: likhitha.endla@gmail.com

## 📊 Performance

- Lighthouse Score: 90+ (mobile & desktop)
- First Contentful Paint (FCP): <1.5s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1

## 📝 License

Personal portfolio - All rights reserved © 2024

## 🤝 Support

For updates or customizations, refer to the Next.js and Tailwind CSS documentation.

---

**Portfolio Version**: 1.0.0  
**Last Updated**: May 2024
