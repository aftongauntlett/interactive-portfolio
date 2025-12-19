# Interactive Git Learning Platform

A narrative-driven git tutorial application that transforms learning into an engaging, game-like experience. Built with modern React patterns and inspired by The Stanley Parable's storytelling approach.

## Overview

This project demonstrates expertise in building immersive educational interfaces by combining technical education with interactive storytelling. Users learn git commands through a simulated terminal with real-time feedback, guided by a dynamic narrator that adapts to their actions.

## Key Features

- **Interactive Terminal Simulation** — Custom git command parser with contextual help and intelligent feedback
- **Narrative-Driven UI** — Story-based learning approach inspired by The Stanley Parable
- **Dynamic Theming** — Character-driven visual experiences with smooth transitions
- **Achievement System** — Progress tracking with Zustand state management
- **3D Visual Elements** — Three.js integration for enhanced immersion
- **Accessibility Focus** — Full keyboard navigation, screen reader support, and motion preferences

## Tech Stack

**Core**: React 19, TypeScript, Vite, TailwindCSS  
**State & Animation**: Zustand, Framer Motion, React Spring  
**3D Graphics**: Three.js, React Three Fiber, React Three Drei  
**Testing**: Vitest, React Testing Library

## Technical Implementation

- **Modern React Architecture**: Leverages React 19 features with TypeScript for type-safe component composition
- **Modular Design**: Reusable component primitives with theme variants and shared UI patterns
- **Custom Hooks**: Abstracted logic for narrator timing, responsive behavior, and user interactions
- **CSS Custom Properties**: Dynamic theme system enabling runtime style switching
- **Error Boundaries**: Graceful degradation with user-friendly error recovery
- **Performance Optimized**: Code splitting, lazy loading, and memoization strategies

## Development

```bash
npm install
npm run dev        # Development server at localhost:5173
npm run build      # Production build
npm run preview    # Preview production build
```

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

Built by [Afton Gauntlett](https://www.aftongauntlett.com/)