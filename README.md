# Codrex Portfolio Website

A high-performance, dark-themed portfolio website built with **Next.js 16+**, **Tailwind CSS**, and **Framer Motion** with a touch of **GSAP** and also **TypeScript** for type safety. Designed for Codrex, a full-stack developer specializing in the **MERN stack**.

![Portfolio Preview](/public/avatar-placeholder.png)

## 🚀 Technolgies Used

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## ✨ Features

- **Smooth Scroll Navigation**: Seamlessly glide between Hero, About, Skills, Projects, and Contact sections.
- **Interactive Animations**:
  - Letter-by-letter Hero text reveal.
  - Staggered entrance animations for content.
  - Hover effects on cards and skills.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens with a custom mobile menu.
- **Dark Mode Aesthetic**: Deep blue and gray accents on a sleek black background (`#0a0a0a`).
- **Dynamic Components**:
  - **Skills Grid**: Showcasing tech stack with official brand colors.
  - **Project Cards**: Image zoom and lift effects on hover.
  - **Contact Form**: Interactive input fields with focus states.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codrrex/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/              # App Router pages and layout
│   ├── globals.css   # Global styles & Tailwind config
│   ├── layout.tsx    # Root layout with metadata & fonts
│   └── page.tsx      # Main single-page application
├── components/       # Reusable UI components
│   ├── Navbar.tsx    # Fixed navigation & mobile menu
│   ├── Hero.tsx      # Landing section
│   ├── About.tsx     # Bio section
│   ├── Skills.tsx    # Tech stack grid
│   ├── Projects.tsx  # Project showcase
│   ├── Contact.tsx   # Contact form
│   └── Footer.tsx    # Site footer
├── lib/              # Utilities
│   ├── animations.ts # Framer Motion variants
│   └── utils.ts      # Class merging helper (cn)
└── types/            # TypeScript interfaces
```

## 📝 User Customization

### Updating Content
- **Bio & Text**: Edit `src/components/About.tsx` and `Hero.tsx`.
- **Skills**: Update the `skills` array in `src/components/Skills.tsx`.
- **Projects**: Modify the `projects` array in `src/components/Projects.tsx`.

### Adding Functional Contact Form
The current form is a UI implementation. To make it functional:
1. Use a service like [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/).
2. Update the `onSubmit` handler in `src/components/Contact.tsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 💻 and ☕ by **Codrex**.
