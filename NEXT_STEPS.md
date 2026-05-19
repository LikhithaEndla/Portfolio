# Portfolio - Next Steps Checklist

## 🚀 Immediate Actions (Before Running `npm install`)

- [ ] **Verify Node.js Installation**
  - Open Terminal: `node --version` (should be v18+)
  - If not installed, download from https://nodejs.org
  
- [ ] **Navigate to Project**
  - Command: `cd /Users/apple/Desktop/portfolio`
  
- [ ] **Review Project Structure**
  - Check files created: `ls -la`
  - All 50+ files should be present

## 📦 Installation & Setup

- [ ] **Install Dependencies**
  - Command: `npm install`
  - Wait for completion (may take 2-5 minutes)

- [ ] **Start Development Server**
  - Command: `npm run dev`
  - Should start on http://localhost:3000

- [ ] **Verify in Browser**
  - Open http://localhost:3000
  - Check all sections load correctly
  - Test theme toggle (top-right button)
  - Test navigation links (scroll-to)

## ✏️ Customization (Optional but Recommended)

- [ ] **Update Personal Information**
  - File: `src/data/personal.ts`
  - Update name, email, LinkedIn, GitHub links

- [ ] **Verify Skills Data**
  - File: `src/data/skills.ts`
  - Review 7 categories + 50+ skills
  - Make changes if needed

- [ ] **Verify Experience Data**
  - File: `src/data/experience.ts`
  - Review 4 companies, clients, technologies
  - Update with latest info if needed

- [ ] **Verify Projects Data**
  - File: `src/data/projects.ts`
  - Review 5 featured projects
  - Update descriptions/tech stack as needed

## 🎨 Visual Verification

- [ ] **Check Dark Mode** (default)
  - All text readable
  - Accent colors (cyan, indigo) visible
  - No layout shifts

- [ ] **Check Light Mode**
  - Click theme toggle button (top-right)
  - Verify light mode renders correctly
  - Toggle back to dark mode

- [ ] **Check Mobile View**
  - Open DevTools (F12)
  - Set device to iPhone 12/13
  - Hamburger menu works
  - Single column layout
  - All content readable

- [ ] **Check Tablet View**
  - Set device to iPad
  - 2-column skill grid
  - 2-column project grid

- [ ] **Check Desktop View**
  - Full width desktop (1920x1080+)
  - Full navigation visible
  - 3-column layouts

## 🔗 Navigation Testing

- [ ] **Test Scroll Navigation**
  - Click "About" link in header
  - Page should scroll to About section
  - Test all navigation links:
    - About
    - Skills
    - Experience
    - Projects
    - Contact

- [ ] **Test Mobile Menu**
  - On mobile, click hamburger icon
  - Menu should slide out
  - Click a link
  - Menu should close
  - Page should scroll to section

## 🚢 Before Deployment

- [ ] **Build for Production**
  - Command: `npm run build`
  - Should complete without errors
  - Should create `.next` folder

- [ ] **Test Production Build**
  - Command: `npm start`
  - Open http://localhost:3000
  - Verify all sections work

- [ ] **Check Console for Errors**
  - Open DevTools (F12)
  - Go to Console tab
  - Should have 0 errors (warnings OK)

- [ ] **Lighthouse Score**
  - Open DevTools
  - Go to Lighthouse tab
  - Click "Analyze page load"
  - Target score: 90+ (desktop), 85+ (mobile)

## 🌐 Deployment Options

- [ ] **Prepare for Deployment**
  - Push code to GitHub (create repo first)
  
- [ ] **Deploy Option 1: Vercel (Recommended)**
  - Go to https://vercel.com
  - Click "New Project"
  - Import GitHub repository
  - Auto-deploy on every push
  
- [ ] **Deploy Option 2: Netlify**
  - Go to https://netlify.com
  - Connect GitHub repository
  - Auto-deploy on every push

- [ ] **Deploy Option 3: Custom Domain**
  - After deployment, configure custom domain
  - e.g., likhitha-portfolio.com

## 📞 Optional Enhancements

- [ ] **Integrate Contact Form**
  - Choose: Formspree, EmailJS, or custom API
  - Add API key to `.env.local`
  - Update Contact.tsx submission handler

- [ ] **Add Google Analytics**
  - Create account at google.com/analytics
  - Add GA ID to `.env.local`
  - Integrate in layout.tsx

- [ ] **Add Project Images**
  - Add screenshots to `public/images/`
  - Update project.ts with image paths
  - Reference in ProjectCard.tsx

- [ ] **Add Resume PDF**
  - Save resume as `public/resume.pdf`
  - "View Resume" button already links to it

## ✅ Quality Checklist

- [ ] All sections load without errors
- [ ] Navigation works on all devices
- [ ] Theme toggle persists across reload
- [ ] No console errors or warnings
- [ ] Lighthouse score ≥90
- [ ] Responsive on mobile/tablet/desktop
- [ ] Contact form shows feedback
- [ ] Social links open correctly
- [ ] Deployment successful
- [ ] Custom domain working (if configured)

---

## 📝 Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

**Start with: `cd /Users/apple/Desktop/portfolio && npm install && npm run dev`**

Then visit: http://localhost:3000
