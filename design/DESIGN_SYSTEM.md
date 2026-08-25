# DESIGN SYSTEM — i-pro.tech

## Concept: ARCHITECTURAL PRECISION

Based on selected visual direction emphasizing methodology, precision, and systematic approach.

---

## 1. COLOR TOKENS

### Core Palette

```css
/* Backgrounds */
--color-bg-primary: #FAFAFA;      /* Main page background, off-white paper-like */
--color-bg-surface: #FFFFFF;      /* Cards, sections, elevated surfaces */
--color-bg-secondary: #F5F5F5;    /* Subtle section differentiation */

/* Text */
--color-text-primary: #1A1A1A;    /* Headlines, primary content */
--color-text-secondary: #525252;  /* Body text, subtitles */
--color-text-tertiary: #737373;   /* Muted text, labels */
--color-text-inverse: #FFFFFF;    /* Text on dark backgrounds */

/* Brand & Accent */
--color-primary: #0066CC;         /* Primary brand blue, trust & action */
--color-primary-hover: #0052A3;   /* Hover state for primary */
--color-primary-active: #004080;  /* Active/pressed state */

/* Functional Colors */
--color-border: #E5E5E5;          /* Borders, dividers */
--color-border-strong: #D4D4D4;   /* Emphasized borders */
--color-success: #059669;         /* Success states */
--color-error: #DC2626;           /* Error states */
--color-warning: #D97706;         /* Warning states */

/* Interactive States */
--color-focus: #0066CC;           /* Focus ring */
--color-disabled-bg: #F5F5F5;     /* Disabled backgrounds */
--color-disabled-text: #A3A3A3;   /* Disabled text */
```

### Usage Guidelines

**Primary Color (#0066CC):**
- Primary CTA buttons
- Links (with hover state)
- Process step numbers
- Form focus states
- Key highlights

**Avoid:**
- Gradients using primary color
- Overuse in decorative elements
- Background fills except small accents

---

## 2. TYPOGRAPHY

### Font Families

```css
/* Primary Font - All UI and Body */
--font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Monospace Accent - Numbers, Labels, Technical Elements */
--font-family-mono: 'JetBrains Mono', 'IBM Plex Mono', 'Consolas', monospace;
```

### Font Loading Strategy

```html
<!-- Google Fonts preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Inter (weights: 400, 500, 600, 700) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- JetBrains Mono (weights: 400, 500) -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `--text-display` | 64px / 4rem | 600 | 1.1 | -0.02em | Hero H1 (desktop) |
| `--text-h1` | 48px / 3rem | 600 | 1.15 | -0.01em | Section headers |
| `--text-h2` | 36px / 2.25rem | 600 | 1.2 | 0 | Process stage titles |
| `--text-h3` | 24px / 1.5rem | 600 | 1.3 | 0 | Subsections, form titles |
| `--text-body-lg` | 18px / 1.125rem | 400 | 1.6 | 0 | Hero subtitle, lead text |
| `--text-body` | 16px / 1rem | 400 | 1.6 | 0 | Body copy, descriptions |
| `--text-small` | 14px / 0.875rem | 400 | 1.5 | 0 | Labels, helper text |
| `--text-xs` | 12px / 0.75rem | 400 | 1.5 | 0.02em | Fine print, legal |
| `--text-eyebrow` | 13px / 0.8125rem | 600 | 1.4 | 0.1em | Eyebrow labels (ALL CAPS) |
| `--text-button` | 16px / 1rem | 500 | 1.2 | 0 | Button text |
| `--text-mono-label` | 14px / 0.875rem | 500 | 1.5 | 0 | Numbering, technical labels |

### Responsive Typography

```css
/* Mobile First Scaling */
@media (min-width: 768px) {
  --text-display: 56px;
  --text-h1: 42px;
}

@media (min-width: 1024px) {
  --text-display: 64px;
  --text-h1: 48px;
}
```

### Typography Principles

1. **Hierarchy through size, not weight** - Use significant size differences rather than bold weights
2. **Generous line-height for body** - 1.6 for comfortable reading
3. **Tight leading for headlines** - 1.1-1.2 for solid, architectural feel
4. **Monospace for structure** - Numbers, step indicators, technical references
5. **No font-size below 14px** - Maintain readability across all devices

---

## 3. LAYOUT SYSTEM

### Container & Max Width

```css
/* Main Content Container */
--layout-max-width: 1200px;
--layout-padding-desktop: 80px;    /* Left/right padding on desktop */
--layout-padding-tablet: 40px;      /* Left/right padding on tablet */
--layout-padding-mobile: 20px;      /* Left/right padding on mobile */

/* Container Class */
.container {
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--layout-padding-mobile);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--layout-padding-tablet);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--layout-padding-desktop);
  }
}
```

### Grid System

```css
/* 12-Column Grid */
--grid-columns: 12;
--grid-gutter: 24px;              /* Space between columns */

/* Grid Implementation */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
}

/* Common Column Spans */
.col-4 { grid-column: span 4; }   /* 33% */
.col-6 { grid-column: span 6; }   /* 50% */
.col-8 { grid-column: span 8; }   /* 66% */
.col-12 { grid-column: span 12; } /* 100% */
```

### Section Spacing

```css
/* Vertical Rhythm */
--section-spacing-desktop: 120px;  /* Space between major sections */
--section-spacing-tablet: 80px;
--section-spacing-mobile: 60px;

/* Component Spacing */
--element-spacing-tight: 12px;
--element-spacing-base: 16px;
--element-spacing-relaxed: 24px;
--element-spacing-loose: 32px;
```

### Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 390px;   /* Small mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Laptop */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1440px; /* Large desktop */
--breakpoint-max: 1920px; /* Extra large */

/* Media Query Usage */
@media (min-width: 768px) { /* Tablet and up */ }
@media (min-width: 1024px) { /* Desktop and up */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

---

## 4. SPACING SYSTEM

### Base Unit: 4px

All spacing values are multiples of 4px for consistency.

```css
/* Spacing Scale */
--space-0: 0px;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Application Examples

```css
/* Component Internal Spacing */
.button {
  padding: var(--space-4) var(--space-6);  /* 16px vertical, 24px horizontal */
}

.card {
  padding: var(--space-8);  /* 32px all sides */
}

/* Layout Spacing */
.section {
  padding: var(--space-24) 0;  /* 96px top/bottom */
}

/* Element Gaps */
.stack-gap-sm { gap: var(--space-3); }   /* 12px */
.stack-gap-md { gap: var(--space-4); }   /* 16px */
.stack-gap-lg { gap: var(--space-6); }   /* 24px */
.stack-gap-xl { gap: var(--space-8); }   /* 32px */
```

---

## 5. COMPONENT LIBRARY

### 5.1 Buttons

#### Primary Button

```css
.btn-primary {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-6);  /* 16px 24px */
  
  /* Typography */
  font-family: var(--font-family-sans);
  font-size: var(--text-button);
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
  
  /* Colors */
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  border: 1px solid transparent;
  
  /* Shape */
  border-radius: 2px;  /* Minimal radius for architectural feel */
  
  /* Interaction */
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
}

.btn-primary:active {
  background-color: var(--color-primary-active);
  transform: translateY(1px);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.btn-primary:disabled {
  background-color: var(--color-disabled-bg);
  color: var(--color-disabled-text);
  cursor: not-allowed;
  transform: none;
}
```

#### Secondary Button (Ghost)

```css
.btn-secondary {
  /* Same layout as primary */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-6);
  
  /* Typography */
  font-family: var(--font-family-sans);
  font-size: var(--text-button);
  font-weight: 500;
  
  /* Colors */
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-border-strong);
  
  /* Shape */
  border-radius: 2px;
  
  /* Interaction */
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-secondary:hover {
  background-color: rgba(0, 102, 204, 0.04);
  border-color: var(--color-primary);
}
```

#### Button Sizes

```css
/* Default (as above) */

/* Large */
.btn-large {
  padding: var(--space-5) var(--space-8);  /* 20px 32px */
  font-size: 18px;
}

/* Small */
.btn-small {
  padding: var(--space-3) var(--space-4);  /* 12px 16px */
  font-size: 14px;
}
```

---

### 5.2 Links

```css
.link {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}

.link:hover {
  border-bottom-color: var(--color-primary);
}

.link:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

---

### 5.3 Form Inputs

#### Text Input

```css
.input {
  /* Layout */
  width: 100%;
  padding: var(--space-4) var(--space-4);  /* 16px */
  
  /* Typography */
  font-family: var(--font-family-sans);
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text-primary);
  
  /* Colors & Border */
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  
  /* Transition */
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input::placeholder {
  color: var(--color-text-tertiary);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.input:disabled {
  background-color: var(--color-disabled-bg);
  color: var(--color-disabled-text);
  cursor: not-allowed;
}

/* Error State */
.input.error {
  border-color: var(--color-error);
}

.input.error:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
```

#### Input Label

```css
.input-label {
  display: block;
  font-family: var(--font-family-sans);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);  /* 8px */
}

.input-label.required::after {
  content: '*';
  color: var(--color-error);
  margin-left: 4px;
}
```

#### Input Group (Label + Input + Error)

```css
.form-group {
  margin-bottom: var(--space-6);  /* 24px */
}

.form-error {
  display: none;
  font-size: var(--text-small);
  color: var(--color-error);
  margin-top: var(--space-2);  /* 8px */
}

.form-group.error .form-error {
  display: block;
}
```

---

### 5.4 Checkbox

```css
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);  /* 12px */
}

.checkbox {
  /* Reset default */
  appearance: none;
  -webkit-appearance: none;
  
  /* Layout */
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 0;
  
  /* Colors & Border */
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border-strong);
  border-radius: 2px;
  
  /* Cursor */
  cursor: pointer;
  
  /* Transition */
  transition: all 0.15s ease;
}

.checkbox:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  
  /* Checkmark via background image or pseudo-element */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-size: 14px;
  background-position: center;
  background-repeat: no-repeat;
}

.checkbox:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.checkbox:disabled {
  background-color: var(--color-disabled-bg);
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-label {
  font-size: var(--text-small);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.checkbox-label a {
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.checkbox-label a:hover {
  border-bottom-color: var(--color-primary);
}
```

---

### 5.5 Process Block (Three-Stage Methodology)

#### Container

```css
.process-section {
  padding: var(--space-24) 0;  /* 96px vertical */
  background-color: var(--color-bg-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);  /* 32px */
}

@media (max-width: 1023px) {
  .process-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);  /* 48px */
  }
}
```

#### Individual Process Card

```css
.process-card {
  position: relative;
  padding: var(--space-6);  /* 24px */
}

/* Stage Number */
.process-number {
  font-family: var(--font-family-mono);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: var(--space-4);  /* 16px */
}

/* Title */
.process-title {
  font-family: var(--font-family-sans);
  font-size: var(--text-h2);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);  /* 8px */
}

/* Subtitle */
.process-subtitle {
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);  /* 24px */
}

/* Bullet List */
.process-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-6) 0;
}

.process-list li {
  position: relative;
  padding-left: var(--space-6);  /* 24px */
  margin-bottom: var(--space-3);  /* 12px */
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.process-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background-color: var(--color-primary);
  border-radius: 50%;
}

/* Result Box */
.process-result {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: var(--space-4);  /* 16px */
  border-radius: 2px;
}

.process-result-label {
  font-family: var(--font-family-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-2);  /* 8px */
}

.process-result-text {
  font-size: var(--text-small);
  color: var(--color-text-primary);
  line-height: 1.5;
}
```

---

### 5.6 Document Links

```css
.document-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);  /* 12px */
  padding: var(--space-4) var(--space-5);  /* 16px 20px */
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.15s ease;
}

.document-link:hover {
  border-color: var(--color-primary);
  background-color: rgba(0, 102, 204, 0.04);
}

.document-icon {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
}

.document-text {
  font-size: var(--text-body);
  font-weight: 500;
}
```

---

### 5.7 Header

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-6) 0;  /* 24px vertical */
  border-bottom: 1px solid var(--color-border);
}

.header-brand {
  font-family: var(--font-family-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  letter-spacing: -0.02em;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);  /* 24px */
}

/* Simple nav links if needed */
.header-nav a {
  font-size: var(--text-small);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.15s ease;
}

.header-nav a:hover {
  color: var(--color-text-primary);
}
```

---

### 5.8 Footer

```css
.footer {
  padding: var(--space-16) 0;  /* 64px vertical */
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);  /* 48px */
}

@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

/* Contacts Column */
.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);  /* 12px */
}

.footer-contact-item {
  font-size: var(--text-body);
  color: var(--color-text-secondary);
}

.footer-contact-item a {
  color: var(--color-text-primary);
  text-decoration: none;
}

.footer-contact-item a:hover {
  text-decoration: underline;
}

/* Legal Column */
.footer-legal {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);  /* 16px */
}

.footer-legal-text {
  font-size: var(--text-small);
  color: var(--color-text-tertiary);
  line-height: 1.6;
}

.footer-legal-links {
  display: flex;
  gap: var(--space-6);  /* 24px */
}

.footer-legal-links a {
  font-size: var(--text-small);
  color: var(--color-text-secondary);
  text-decoration: none;
}

.footer-legal-links a:hover {
  text-decoration: underline;
}
```

---

### 5.9 Hero Section

```css
.hero {
  padding: var(--space-24) 0;  /* 96px vertical */
  background-color: var(--color-bg-primary);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);  /* 64px */
  align-items: center;
}

@media (max-width: 1023px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}

/* Hero Content */
.hero-eyebrow {
  font-family: var(--font-family-mono);
  font-size: var(--text-eyebrow);
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);  /* 16px */
}

.hero-title {
  font-size: var(--text-display);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);  /* 24px */
}

.hero-subtitle {
  font-size: var(--text-body-lg);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-8);  /* 32px */
}

/* Hero CTA Group */
.hero-cta {
  display: flex;
  gap: var(--space-4);  /* 16px */
}

/* Hero Visual (Abstract Diagram) */
.hero-visual {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* SVG/CSS diagram styles would go here */
```

---

### 5.10 Contact Form Section

```css
.contact-section {
  padding: var(--space-24) 0;
  background-color: var(--color-bg-surface);
}

.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form-title {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-8);  /* 32px */
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

/* Form submit button full-width on mobile */
@media (max-width: 767px) {
  .contact-form .btn-primary {
    width: 100%;
  }
}
```

---

## 6. ACCESSIBILITY STANDARDS

### Color Contrast

All text must meet WCAG AA standards:
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px+): 3:1 contrast ratio minimum

### Focus States

All interactive elements must have visible focus indicators:
```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Keyboard Navigation

- All interactive elements accessible via Tab
- Logical tab order
- No keyboard traps
- Form submission possible with Enter key

### Screen Reader Support

- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- ARIA labels where needed
- Alt text for any images/SVGs
- Form labels properly associated with inputs

---

## 7. RESPONSIVE BEHAVIOR

### Mobile (< 768px)

- Single column layout throughout
- Stacked process cards (vertical)
- Full-width form buttons
- Reduced typography scale
- Touch-friendly tap targets (min 44px)
- Simplified header (brand + CTA only)

### Tablet (768px - 1023px)

- Two-column hero (if content allows)
- Two-column process grid option
- Adjusted spacing (reduce from desktop values)
- Maintain readability with comfortable line lengths

### Desktop (1024px+)

- Full grid expression
- Maximum content width: 1200px
- Generous whitespace
- Multi-column layouts where appropriate

---

## 8. PERFORMANCE GUIDELINES

### Font Loading

- Use `display=swap` to prevent FOIT
- Preconnect to Google Fonts
- Limit font weights to essentials (400, 500, 600, 700)

### CSS Optimization

- Use CSS custom properties for theming
- Minimize specificity
- Avoid !important
- Critical CSS inlined in `<head>`

### Asset Strategy

- Inline critical SVG icons
- Lazy load non-critical assets
- No external icon libraries
- Minimal JavaScript

---

## 9. IMPLEMENTATION NOTES

### File Structure

```
/css/
  styles.css          # All design system tokens + components

/js/
  main.js             # Form validation, interactions

/assets/
  /logo/
  /icons/             # Inline SVG icons
```

### CSS Architecture

```css
/* 1. Custom Properties (Design Tokens) */
:root {
  /* Colors */
  /* Typography */
  /* Spacing */
  /* Layout */
}

/* 2. Base Styles */
/* Reset, typography defaults */

/* 3. Components */
/* Buttons, forms, cards, etc. */

/* 4. Layout */
/* Sections, grid, containers */

/* 5. Utilities */
/* Helper classes */

/* 6. Responsive */
/* Media queries */
```

---

*Design System v1.0 for i-pro.tech*  
*Based on "Architectural Precision" concept*  
*Using frontend-design skill for implementation specifications*
