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
├── assets/             # CSS folder
├── components/         # Components folder
├── public/             # Static assets
├── .prettierignore     # Prettier ignored files
├── .prettierrc         # Prettier formatting config
├── .gitignore          # Git ignored files
├── app.vue             # Root Vue component
├── eslint.config.mjs   # ESLint config
├── nuxt.config.ts      # Nuxt config
├── package-lock.json   # Lockfile
├── package.json        # Project metadata and scripts
├── README.md           # This file
├── tailwind.config.ts  # Tailwind config
└── tsconfig.json       # TypeScript config
```

## Approach and Design Decisions

- **Framework**: Chose Nuxt.js to align with Seetru Studio’s future project.
- **Component Structure**: Built modular components (Header, Hero, Footer, etc.) for maintainability.
- **Styling**: Used Tailwind CSS for accurate, responsive design based on Figma specs.
- **Responsive Design**: Mobile-first design approach using Figma's breakpoints: 430px (mobile), 768px (tablet), 1400px (desktop).
- **Design Integration**: Extracted colors, fonts, and spacing directly from the Figma file.

## Responsive Design Details

- **Mobile (430px)**: Stacked layout, touch-friendly buttons
- **Tablet (768px)**: Grid layout adjustments for medium screens
- **Desktop (1400px)**: Full-width layouts with proper spacing

## Challenges and Solutions

- **Challenge**: Matching exact spacing from Figma
  - **Solution**: Used Figma ruler + Tailwind spacing classes for precision

- **Challenge**: Limited early experience with frontend layout and CSS
  - **Solution**: As this was one of my first frontend projects, I initially lacked deep knowledge of layout techniques and CSS. To overcome this, I focused on understanding and strengthening my CSS skills, which allowed me to better align the implementation with the Figma design’s layout requirements.

- **Challenge**: Customizing components from a library
  - **Solution**: Adapting library components to fit the design pushed me to dive into the documentation more thoroughly. This gave me valuable practice in understanding how these libraries work under the hood, boosting my confidence in working with third-party tools.

## Reflection

I'm grateful for the opportunity to work on this task, as it gave me a hands-on chance to grow as a frontend developer. One key lesson I took away is the importance of researching tools and libraries thoroughly at the start. I didn’t dive deep enough into options like Vue.js component libraries early on, which made it harder to decide on the best components later in the process. In future projects, I’ll prioritize upfront research to streamline decision-making.

I also learned how crucial good planning and component structure are for maintainability. At first, I underestimated the complexity of certain sections like the header and bundled too much logic into a single component. When I needed to make changes later, it was challenging and risked breaking other elements. Going forward, I’ll break things down into smaller, modular components earlier to make iteration smoother.

Overall, this task helped me improve both technically and in how I approach building scalable, readable code — lessons I’m excited to carry into future work.

## Next Steps

For my next phase, I plan to continue developing this project to see how far I can push it as a personal growth exercise. I want to build on what I’ve already created, experimenting with adding more animations to make the interface more dynamic and engaging. If permitted, I’d love to evolve this into a standout piece for my personal portfolio, demonstrating my ability to enhance functionality and design while deepening my frontend skills.

## Contact

For questions:

- **Email**: danialhaikalsanusi@gmail.com
- **LinkedIn**: [linkedin.com/in/m-danial-haikal](https://www.linkedin.com/in/m-danial-haikal/)

---

## Notes

- This project was built as part of the Seetru Studio hiring process.
- All designs were implemented according to Figma specs.
- Feedback and improvements are welcome!

---

**Thank you for reviewing my submission.**
