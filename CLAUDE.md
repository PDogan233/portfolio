# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic portfolio site for 张家豪 (Jiahao Zhang), a PhD student at Zhejiang University. The site is hosted via GitHub Pages at `pdogan233.github.io/portfolio/`.

## No Build Step

This is a pure static site — no build tools, no package.json, no dependencies. Open any `.html` file directly in a browser to preview. No server or build step needed.

## File Structure

```
index.html          — Personal info, education background, skills, activities
projects.html       — Research projects and internship experience
publications.html   — Published papers, pending papers, patents, awards/honors
css/style.css       — All styles (CSS custom properties, responsive, single file)
js/main.js          — Active nav link highlighting based on current page pathname
images/             — Personal photo and any other static images
```

## Architecture Notes

- **Shared nav**: All three HTML pages duplicate the same `<nav>` block. If you change the nav, update all three files.
- **CSS variables**: The design system is defined in `:root` in [css/style.css](css/style.css#L4-L17). Colors (`--primary`, `--accent`, `--text`, `--muted`, etc.), spacing, and shadows use these variables throughout.
- **Page detection**: [js/main.js](js/main.js) detects the current page from `window.location.pathname` and applies `.active` to the matching nav link via `data-page` attributes.
- **No shared HTML partials**: Each page is self-contained. There's no templating or build-time includes — the nav duplication is intentional simplicity.
- **Responsive**: A single breakpoint at 700px in [css/style.css](css/style.css#L148) adjusts nav spacing and heading size for smaller screens.
- **Language**: All content is in Simplified Chinese (`lang="zh-CN"`).

## Deployment

GitHub Pages serves this from the repo root. The README links to the live site at `https://pdogan233.github.io/portfolio/`.
