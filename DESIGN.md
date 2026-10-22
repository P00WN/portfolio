---
version: alpha
name: Portfolio
description: Dark technical aesthetic for a datacenter operations portfolio. Deep navy surfaces, cyan as the single interaction color, monospace accents for infrastructure detail.
colors:
  background: "#0a0e17"
  surface: "#0f1923"
  surface-muted: "#0d1520"
  foreground: "#c8d6e5"
  primary: "#00d4ff"
  secondary: "#5c6bc0"
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
    fontWeight: 600
    lineHeight: "1.2"
  body:
    fontFamily: "Inter"
    fontSize: "1rem"
    lineHeight: "1.6"
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
  section: "96px"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
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
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
  badge:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
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
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body}"
---

# Portfolio

Dark technical aesthetic for a datacenter operations portfolio. Deep navy
surfaces carry the page, cyan is the only color that signals interaction, and
monospace is reserved for infrastructure detail (hostnames, versions, stack
names) rather than body copy.

## Colors

- **Background (#0a0e17):** Page canvas. Slightly blue-shifted black so the
  cyan accent reads as light, not as neon.
- **Surface (#0f1923):** Cards, panels, and the frosted header bar. One step
  up from the canvas, never a hard border.
- **Foreground (#c8d6e5):** Body text. Soft blue-grey, never pure white —
  pure white on the navy canvas vibrates.
- **Primary (#00d4ff):** The single interaction color. Links, focus rings,
  active nav items, the primary button. Used sparingly so it keeps its weight.
- **Secondary (#5c6bc0):** The hover state of the primary button and the
  secondary gradient stop. Never used for text on dark surfaces.
- **Success (#00e676):** Certificates earned, completed timeline entries.

## Typography

Inter for everything the reader actually reads: headings, body copy, and
labels. JetBrains Mono appears only where the content is literally technical
— a certificate issuer, a stack, a version string. Weight 500 is the floor for
captions; below that, text gets lost against the dark canvas.

## Layout

Content is capped at 1200px with a 720px reading column for prose sections.
Sections are separated by 96px of vertical space rather than dividers, so the
page reads as a continuous scroll. Gutters are 24px and collapse to 16px on
mobile.

## Elevation & Depth

Depth comes from light, not shadow. Cards use a 1px translucent cyan border
plus a backdrop blur over the canvas. Shadows are reserved for elements that
actually float: the sticky header and the scroll indicator.

## Shapes

Corners are soft but not round: 10px for controls, 16px for cards, fully
rounded only for badges and pills.

## Components

- **button-primary** is the only high-emphasis action on a page. Cyan fill,
  near-black label.
- **button-secondary** is the quiet counterpart: surface fill, cyan label.
- **badge** marks a neutral label. **badge-success** marks a completed state.
- **card** is the default container for skills, certificates, and timeline
  entries.

## Do's and Don'ts

- Do keep cyan for interaction only; never use it as a large background fill.
- Do use monospace for technical strings, not for headings.
- Don't add a second high-emphasis button to a section.
- Don't introduce new hues; extend the neutral ramp instead.
