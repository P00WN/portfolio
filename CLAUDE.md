# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Malthe Vorbeck (Junior Datacenter Operations Engineer at HBSN GmbH). A static website deployed via Heroku (static.json) or Docker/nginx (nginx.conf).

## Codebase Structure

- `index.html` — Main page (Home, About, Skills, Timeline, Certificates sections, single-page with smooth scroll)
- `kontakt.html` — Contact page with form (uses EmailJS)
- `impressum.html` — Legal notice (Impressum, German legal requirement)
- `404.html` — Custom 404 error page
- `style.css` — All styles (CSS custom properties, responsive, dark mode support)
- `script.js` — All JS (mobile nav, smooth scroll, project filtering, typewriter, EmailJS, AOS, dark mode localStorage, cookie consent, modals, tic-tac-toe easter egg)
- `static.json` — Heroku static site config (clean URLs, SPA fallback route, cache headers)
- `nginx.conf` — Nginx config for Docker-based deployment
- `images/` — Static images (profile photo, etc.)

## External Dependencies (CDN, no package manager)

- Font Awesome 6.4.0 (icons)
- AOS 2.3.4 (scroll animations)
- Poppins (Google Fonts)
- EmailJS (contact form)

## Development

This is a plain static site — no build step, no bundler, no package.json, no tests. To develop:

1. Serve files locally: `python3 -m http.server 8000`
2. Open `http://localhost:8000`
3. Edit HTML/CSS/JS directly, refresh browser

## Deployment

Two deployment options are configured:
- **Heroku**: Uses `static.json` — commit and push to Heroku remote
- **Docker/Nginx**: Uses `nginx.conf` for routing

## Code Conventions

- German language for user-facing text
- No separate bundler — HTML references `style.css` and `script.js` directly
- CSS uses CSS custom properties for theming (supports dark mode via `.dark-mode` class)
