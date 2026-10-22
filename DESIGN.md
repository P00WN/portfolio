---
version: alpha
name: Portfolio
description: Calm dark technical aesthetic for a datacenter operations portfolio. Deep navy surfaces, cyan interaction, warm gold highlight for pep. Motion is spring-based and scroll-driven.
colors:
  background: "#0b0e16"
  surface: "#0f172a"
  surface-strong: "#172438"
  surface-muted: "#0c1321"
  foreground: "#dcdde3"
  foreground-muted: "#8c95a7"
  primary: "#00d4ff"
  secondary: "#5c6bc0"
  highlight: "#ffd166"
  success: "#00e676"
typography:
  h1:
    fontFamily: "Inter"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: "1.1"
  h2:
    fontFamily: "Inter"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: "1.2"
  h3:
    fontFamily: "Inter"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.3"
  body:
    fontFamily: "Inter"
    fontSize: "1rem"
    lineHeight: "1.7"
  caption:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 500
  mono:
    fontFamily: "JetBrains Mono"
    fontSize: "0.875rem"
    lineHeight: "1.5"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xl2: "48px"
  section: "96px"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"
layout:
  maxWidth: "1200px"
  contentWidth: "720px"
  gutter: "24px"
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-hover:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
  badge:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.foreground-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  badge-accent:
    backgroundColor: "{colors.primary}/15"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  badge-highlight:
    backgroundColor: "{colors.highlight}/20"
    textColor: "{colors.highlight}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  badge-success:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.success}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#041018"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body}"
---

# Portfolio

Calm dark technical aesthetic for a datacenter operations portfolio. Depth comes from layering and motion, not glare. **Cyan** (`primary`) is the only interaction color. A warm **gold** (`highlight`) appears sparingly — for highlights on the name, divider accents, and micro-icons — so the page stays calm but has pep. Monospace is reserved for infrastructure detail (hostnames, versions, stack names), never for body copy.

## Colors

- **Background (#0b0e16):** Page canvas. Neutral black-blue so accents read clearly without vibrating.
- **Surface (#0f172a):** Cards, panels, header bar. One step up from the canvas.
- **Surface-strong (#172438):** Hover state of a card.
- **Surface-muted (#0c1321):** Side-accent backgrounds, badge backdrops.
- **Foreground (#dcdde3):** Body text. Soft blue-grey, never pure white.
- **Foreground-muted (#8c95a7):** Secondary labels, captions.
- **Primary (#00d4ff):** Links, focus rings, the active nav item, the primary button.
- **Secondary (#5c6bc0):** Button hover state, gradient partner.
- **Highlight (#ffd166):** Name gradient, divider flecks, badge accent. Warm counterpoint — used at low opacity only.
- **Success (#00e676):** Completed timeline entries.

## Typography

Inter everywhere the reader reads: headings, body, labels. JetBrains Mono only where the content is literally technical — an issuer name, a version string, a shell command. Line height rises to 1.7 for readability; captions never drop below 500 weight.

## Motion

- Entrance: each section staggers its children by 0.1s with spring physics (`mass 0.4, stiffness 300, damping 25`).
- Scroll-driven: the timeline rail draws itself as it scrolls into view; skill bars count up to their target.
- Micro: buttons get a horizontal shine sweep on hover; cards lift 4px with a border glow; the header rail fades color on scroll.
- Honoring reduced motion: a global `@media (prefers-reduced-motion)` disables auto-animation — only hover intent animates.

## Elevation & Depth

Purely luminance: one translucent layer of surface over the canvas, a 1px border at `surface-muted` opacity. Floating elements (sticky header, scroll-to-top) get a 1px hairline shadow. No neon glow halos — `primary` appears in a gradient text or a 20% opacity ring only.

## Shapes

Soft corners only: 10px on controls and badges, 16px on cards, 24px on the hero image frame. Pills fully rounded.

## Layout

Content caps at 1200px; the main content column is 720px for prose, 1200px for grids. Sections are spaced 96px apart — no dividers. Gutters are 24px and collapse to 16px on mobile.

## Components

- **button-primary** is the only high-emphasis action per page: cyan fill, near-black label, gold shine on hover.
- **button-ghost** is the quiet link-style button: transparent, cyan label on hover.
- **badge** is neutral. **badge-accent** uses primary at 15%. **badge-highlight** uses gold.
- **card** is the default container; **card-hover** is its interactive state.

## Do's and Don'ts

- Do let motion be fast and springy (150–250ms), never looping neon pulses.
- Do cap `highlight` usage at one element per section.
- Do use `prefers-reduced-motion` to disable auto-animation.
- Don't use pure white for body text; it vibrates against the canvas.
- Don't use gold as an interaction color — only for highlights and accents.