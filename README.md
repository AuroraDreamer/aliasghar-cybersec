# Ali Asghar | Cybersecurity Portfolio

A high-fidelity, interactive professional portfolio showcasing my experience, projects, and insights in the cybersecurity space, specifically focusing on Detection Engineering, adversary behavior, and enterprise security architecture.

## Overview

This repository contains the source code for my personal portfolio website. It is designed to act as a living resume and a digital garden where I document my technical deep-dives and highlight community contributions.

### Key Features
- **Dynamic Blogs Integration**: Automatically fetches and parses my latest articles from Medium via an RSS-to-JSON integration.
- **Theater Mode Video Playback**: Custom, high-performance video player mimicking a macOS window, featuring an immersive theater mode for detailed project demonstrations (e.g., CAPEv2 Malware Sandbox).
- **Glassmorphic Design System**: Built with a sleek, modern aesthetic using Tailwind CSS and Framer Motion for subtle micro-interactions and scroll animations.
- **Curated Learning Hub**: A centralized space for my favorite reads and community highlights.

## Tech Stack
- **Framework**: React + Vite (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Data Integration**: Medium RSS Feed

## Local Development

If you'd like to run this project locally:

1. Clone the repository
```bash
git clone https://github.com/AuroraDreamer/my-website.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Architecture & Maintenance
The site is built with scalability in mind. New projects can be seamlessly added by updating the `ProjectsData` array in `src/components/Home.tsx`. Curated blogs and external community highlights are managed cleanly within the `src/data/blogData.ts` data layer, keeping the UI components completely decoupled from content management.

## Contact
- **LinkedIn**: [Ali Asghar](https://www.linkedin.com/in/aliasghar-cybersec/)
- **GitHub**: [@AuroraDreamer](https://github.com/auroradreamer)
- **Medium**: [@aliasghar.bsinfo](https://medium.com/@aliasghar.bsinfo)
