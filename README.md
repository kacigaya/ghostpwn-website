# GhostPWN Website

**Landing page for the GhostPWN project**  
_Autonomous web pentesting agent · Rust TUI · Multi-provider LLM support_

## Overview

**GhostPWN Website** is a minimal Next.js landing page for the [GhostPWN](https://github.com/GhostPWN/ghostpwn) project. It presents the project branding, feature highlights, provider support, local tooling, and quickstart commands in a dark terminal-inspired interface.

The current site focuses on:

- animated GhostPWN hero section
- dithered WebGL background using Three.js
- concise feature and provider overview
- quick links to the GhostPWN repository and README
- responsive Tailwind CSS layout
- Next.js App Router with TypeScript

#### Features

- Next.js 16 App Router
- React 19 with TypeScript
- Tailwind CSS 4 styling
- Three.js / React Three Fiber visual effects
- Postprocessing dither background
- Optimized logo rendering with `next/image`
- Metadata configured for the GhostPWN landing page
- Bun lockfile included for reproducible installs

## Setup

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Scripts

- `bun dev` starts the local development server
- `bun build` creates a production build
- `bun start` starts the production server
- `bun lint` runs ESLint

## Configuration

This project does not require environment variables for local development.

Useful project files:

- `app/page.tsx`: landing page content and layout
- `app/layout.tsx`: root layout, font setup, and page metadata
- `app/globals.css`: global styles and Tailwind imports
- `components/Dither.tsx`: animated dithered WebGL background
- `components/ASCIIText.tsx`: ASCII-style Three.js text effect component
- `public/ghostpwn-logo.svg`: primary GhostPWN logo asset
- `next.config.ts`: Next.js configuration

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Three.js
- React Three Fiber
- React Three Postprocessing
- Bun

## Notes

- The website links to the main GhostPWN Rust project repository.
- WebGL effects are client-rendered and isolated in client components.
- The main page keeps project content in static arrays for simple updates.
- The visual style is intentionally dark, minimal, and terminal-inspired.

## License

MIT License. See the upstream GhostPWN project for details.

## Contributing

Contributions are welcome. Please open an issue or PR in the relevant GhostPWN repository before proposing larger changes.

Built for academic research in offensive security.
