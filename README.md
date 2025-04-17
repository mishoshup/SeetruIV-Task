# Homepage Assessment

A responsive homepage built for the Seetru Studio job application assessment, based on provided Figma designs.

## Description

This project is a single responsive webpage developed for the Seetru Studio interview process. It implements the Figma prototype provided, with layouts for desktop (1400px), tablet (768px), and mobile (430px). The implementation uses Nuxt.js, HTML, CSS, and JavaScript, focusing on pixel-perfect design, responsiveness, and clean code.

## Technologies Used

- **Nuxt.js 3**: Framework for building the application
- **Vue.js**: Core JavaScript framework
- **Tailwind CSS**: Utility-first styling
- **Node.js** (v18+): JavaScript runtime
- **ESLint & Prettier**: Linting and code formatting
- **Figma**: Design and asset reference

## Setup Instructions

### Prerequisites

- **Node.js v18+**: [Download here](https://nodejs.org/)
- **npm** (or **pnpm**): npm comes with Node.js

### Installation

1. Clone or unzip the project:

   ```bash
   git clone https://github.com/mishoshup/SeetruIV-Task
   ```

   Or extract the provided ZIP file.

2. Navigate to the project folder:

   ```bash
   cd SeetruIV-Task
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   Or with pnpm:
   ```bash
   pnpm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

Or:

```bash
pnpm dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

To build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
.
├── public/             # Static assets
├── server/             # API routes, server middleware, etc.
├── .gitignore          # Git ignored files
├── app.vue             # Root Vue component
├── eslint.config.mjs   # ESLint config
├── nuxt.config.ts      # Nuxt config
├── package-lock.json   # Lockfile
├── package.json        # Project metadata and scripts
├── README.md           # This file
└── tsconfig.json       # TypeScript config
```

## Approach and Design Decisions

<!-- - **Framework**: Chose Nuxt.js to align with Seetru Studio’s tech stack, leveraging built-in routing and SSR.
- **Component Structure**: Built modular components (Header, Hero, Footer, etc.) for maintainability.
- **Styling**: Used Tailwind CSS for accurate, responsive design based on Figma specs.
- **Responsive Design**: Mobile-first design approach using Figma's breakpoints: 430px (mobile), 768px (tablet), 1400px (desktop).
- **Interactivity**: Added mobile menu toggle using Vue's `ref` and `v-if`/`v-show` with transitions.
- **Design Integration**: Extracted colors, fonts, and spacing directly from the Figma file. -->

## Responsive Design Details

<!-- - **Mobile (430px)**: Stacked layout, touch-friendly buttons
- **Tablet (768px)**: Grid layout adjustments for medium screens
- **Desktop (1400px)**: Full-width layouts with proper spacing -->

## Challenges and Solutions

<!-- - **Challenge**: Matching exact spacing from Figma
  - **Solution**: Used Figma ruler + Tailwind spacing classes for precision
- **Challenge**: Smooth mobile menu toggle
  - **Solution**: Vue reactivity + CSS transitions -->

## Contact

For questions:

- **Email**: danialhaikalsanusi@gmail.com
- **LinkedIn**: [linkedin.com/in/m-danial-haikal](https://www.linkedin.com/in/m-danial-haikal/)

---

## Notes

<!-- - This project was built as part of the Seetru Studio hiring process.
- All designs were implemented according to Figma specs.
- Feedback and improvements are welcome! -->

---

**Thank you for reviewing my submission. 🙏**
