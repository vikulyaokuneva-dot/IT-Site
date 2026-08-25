# DESIGN DECISIONS — i-pro.tech

## Concept Selection & Rationale

### Selected Direction: ARCHITECTURAL PRECISION

---

## 1. WHY THIS CONCEPT?

### Business Alignment

The "Architectural Precision" concept was selected over "Editorial Authority" and "Technical Minimalism" because it most accurately reflects the nature of i-pro.tech's business:

**Core Service:** Implementation of AI agents into existing sales processes

This is not:
- Pure strategy consulting (which would suit Editorial)
- Product SaaS (which would suit Technical Minimalism)

This IS:
- Systematic implementation
- Process engineering
- Integration work
- Methodology-driven delivery

The architectural metaphor—blueprints, structured planning, precise execution—directly mirrors what the company actually does.

---

## 2. KEY DESIGN DECISIONS

### 2.1 Color Strategy

**Decision:** Restrained palette with classic blue accent

**Rationale:**
- Blue (#0066CC) is the most trusted color in B2B contexts
- Avoids trendy purple/gradient AI aesthetics
- High contrast ensures readability for time-constrained executives
- Off-white background (#FAFAFA) reduces eye strain vs. pure white

**Rejected Alternatives:**
- Dark theme: Too "developer tool," less trustworthy for traditional business buyers
- Green accent: Associated with finance/sustainability, not technology implementation
- Red accent: Too aggressive for consultative selling

---

### 2.2 Typography Choice

**Decision:** Inter (sans-serif) + JetBrains Mono (accent)

**Rationale:**
- Inter is highly legible at all sizes, modern without being trendy
- Monospace accent reinforces "technical precision" positioning
- Two-font system is simple to maintain
- Google Fonts = reliable loading, no licensing complications

**Rejected Alternatives:**
- Serif for headlines (Playfair Display): Too traditional, conflicts with "technology" positioning
- Single font family: Less visual hierarchy, misses opportunity for technical signaling
- Custom/paid fonts: Unnecessary complexity, maintenance burden

---

### 2.3 Layout Philosophy

**Decision:** 12-column grid, asymmetric hero, structured process section

**Rationale:**
- Grid systems signal methodology and planning
- Asymmetric composition more engaging than centered layouts
- Horizontal process flow suggests progression and momentum
- Generous whitespace = premium positioning

**Rejected Alternatives:**
- Symmetrical/centered layout: Too static, less dynamic
- Masonry/freeform: Too creative, undermines precision message
- Dense information layout: Overwhelming for diagonal readers

---

### 2.4 Visual Elements

**Decision:** Abstract workflow diagram (SVG/CSS), no photography

**Rationale:**
- Photography introduces authenticity risks (stock photos = distrust)
- Abstract diagrams can be precisely controlled
- SVG = fast loading, scalable, no asset dependencies
- Supports "process visualization" without competing with H1

**Rejected Alternatives:**
- Team photos: Requires professional shoot, dates quickly
- Customer logos: None provided, fake logos prohibited
- AI brain/neural networks: Cliché, triggers "AI startup" associations
- Office/workspace photos: Generic, adds no value

---

### 2.5 Component Styling

**Decision:** Minimal border radius (2px), subtle borders, no shadows

**Rationale:**
- Sharp corners = precision, engineering aesthetic
- Shadows create visual noise, date quickly
- Border-based separation cleaner than elevation
- Aligns with architectural/technical drawing aesthetic

**Rejected Alternatives:**
- Fully rounded cards (8-16px): Too friendly/SaaS-like
- Heavy drop shadows: Creates depth that distracts from content
- Glassmorphism: Trendy, will look dated, accessibility concerns

---

### 2.6 Process Section Design

**Decision:** Three equal columns with numbered stages, result boxes

**Rationale:**
- Equal width suggests equal importance of each stage
- Large numbers (monospace) reinforce methodology
- Result boxes provide concrete outcomes (what executives care about)
- Bullet points scannable in seconds

**Rejected Alternatives:**
- Timeline/vertical flow: Takes too much vertical space
- Cards with icons: Icon selection subjective, adds decoration
- Accordion/collapsible: Hides information, adds interaction friction
- Numbered list only: Too simple, doesn't justify premium positioning

---

### 2.7 Form Design

**Decision:** Traditional labels above inputs, full border, clear validation

**Rationale:**
- Labels above = fastest scanning pattern
- Full border clearly defines interactive areas
- Inline validation prevents submission errors
- Checkbox required for legal compliance (152-FZ)

**Rejected Alternatives:**
- Floating labels: Can be confusing, animation adds complexity
- Bottom-border only inputs: Less clear click targets
- Placeholder-only labels: Accessibility nightmare
- Multi-step form: Adds friction for short form

---

### 2.8 Navigation Strategy

**Decision:** Minimal header (brand + CTA), no complex navigation

**Rationale:**
- One-page site doesn't need navigation
- Reduces decision paralysis
- Focuses attention on primary CTA
- Clean visual hierarchy

**Rejected Alternatives:**
- Full navigation menu: Unnecessary for single page
- Sticky header: Adds JS complexity, not needed
- Hamburger menu on desktop: Hides options unnecessarily

---

## 3. ACCESSIBILITY DECISIONS

### 3.1 Color Contrast

**Decision:** All text meets WCAG AA (4.5:1 minimum)

**Implementation:**
- Primary text #1A1A1A on #FAFAFA = 16.5:1 ✓
- Secondary text #525252 on #FFFFFF = 7.2:1 ✓
- Button text #FFFFFF on #0066CC = 4.6:1 ✓

---

### 3.2 Focus States

**Decision:** Visible outline on all interactive elements

**Implementation:**
```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

**Rationale:** Keyboard users must be able to navigate form and links

---

### 3.3 Form Labels

**Decision:** All inputs have visible `<label>` elements

**Rationale:**
- Screen readers require proper label association
- Placeholder-only is not accessible
- Visual clarity for all users

---

## 4. PERFORMANCE DECISIONS

### 4.1 Font Loading

**Decision:** Google Fonts with `display=swap`

**Rationale:**
- Text visible immediately (no FOIT)
- Fallback to system fonts during load
- Preconnect for faster DNS resolution

**Implementation:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

### 4.2 Asset Strategy

**Decision:** Inline SVG icons, no external libraries

**Rationale:**
- Zero HTTP requests for icons
- Full CSS control over colors/sizes
- No dependency on external CDN
- Faster page load

---

### 4.3 JavaScript Approach

**Decision:** Vanilla JS only, minimal footprint

**Rationale:**
- No framework overhead
- Direct DOM manipulation sufficient for form validation
- Easy to maintain by any developer
- Fastest possible execution

**Scope:**
- Form validation
- Form submission handling
- Phone mask (if implemented)
- Success/error state management

---

## 5. CONTENT STRATEGY

### 5.1 Text Placement

**Decision:** All content in HTML with clear comments

**Rationale:**
- Easy to find and edit by non-developers
- No JavaScript templating
- SEO-friendly (content in initial HTML)
- Version control friendly

**Implementation:**
```html
<!-- HERO -->
<h1>...</h1>
<!-- /HERO -->
```

---

### 5.2 Editable Regions

**Decision:** Comment markers for all content sections

**Sections:**
- COMPANY (header brand)
- HERO (eyebrow, H1, subtitle, CTAs)
- PROCESS (three stages)
- DOCUMENTS (PDF links)
- CONTACT FORM (title, fields)
- CONTACTS (phone, telegram, email)
- FOOTER (legal info)

---

### 5.3 Placeholder Strategy

**Decision:** Clear placeholders where real data needed

**Placeholders:**
- Phone: +7 XXX XXX-XX-XX
- Telegram: @telegram
- Legal entity: [Юридическое название]
- INN/KPP: [Реквизиты]

**Rationale:** Client knows exactly what to replace, no fake data

---

## 6. RESPONSIVE STRATEGY

### 6.1 Breakpoint Selection

**Decision:** 768px (tablet), 1024px (desktop)

**Rationale:**
- Industry standard breakpoints
- Covers all required devices (390px - 1920px)
- Manageable media query count

---

### 6.2 Mobile Approach

**Decision:** Single column, stacked layout

**Changes on Mobile:**
- Hero: Text only, visual removed or simplified
- Process: Vertical stack (not grid)
- Form: Full-width button
- Footer: Single column
- Spacing: Reduced by ~30%

**Rationale:**
- Thumb-friendly tap targets
- Fast scrolling (no horizontal interaction)
- Content priority on small screens

---

### 6.3 Tablet Approach

**Decision:** Hybrid layout

**Changes on Tablet:**
- Hero: Potentially two-column if content allows
- Process: Two columns or vertical
- Spacing: Between mobile and desktop values

**Rationale:**
- Intermediate device class
- Often overlooked, deserves specific treatment

---

## 7. SEO DECISIONS

### 7.1 Meta Tags

**Required:**
- `<title>` - Unique, descriptive
- `<meta name="description">` - Compelling summary
- `<link rel="canonical">` - Prevents duplicate content
- `<meta name="viewport">` - Mobile optimization
- `<html lang="ru">` - Language declaration

---

### 7.2 Open Graph

**Required:**
- `og:title`
- `og:description`
- `og:type` (website)
- `og:url` (production URL)
- `og:image` (placeholder until designed)

**Rationale:** Professional link previews in social/messengers

---

### 7.3 Heading Hierarchy

**Structure:**
- H1: Hero headline (one per page)
- H2: Section titles (Process, Documents, Contact)
- H3: Process stage titles

**Rationale:** Semantic structure for SEO and accessibility

---

## 8. LEGAL COMPLIANCE

### 8.1 Privacy Policy Page

**Decision:** Separate privacy.html page

**Content:**
- Standard 152-FZ compliance text
- Data collection purposes
- User rights
- Contact information

**Rationale:** Required by Russian law for form data collection

---

### 8.2 Consent Checkbox

**Decision:** Required checkbox with policy link

**Implementation:**
- Cannot submit without checking
- Clear link to privacy policy
- Plain language (not legalese)

**Rationale:** Legal requirement, builds trust

---

### 8.3 Footer Legal Info

**Required:**
- Legal entity name
- INN/OGRN (when available)
- Privacy policy link
- Copyright notice

**Decision:** Use placeholders until real data provided

---

## 9. ANALYTICS PREPARATION

### 9.1 Yandex Metrica

**Decision:** Placeholder comment in HTML

**Implementation:**
```html
<!-- YANDEX METRICA -->
<!-- Counter ID will be added by client -->
```

**Rationale:** Client can insert their counter ID without code changes

---

### 9.2 Form Tracking

**Recommendation:** 
- Track form submissions as goals
- Track document downloads
- Track CTA clicks

**Implementation:** Will require Metrica goal setup after deployment

---

## 10. BACKEND PREPARATION

### 10.1 Form Endpoint

**Decision:** Prepare for POST to `/send.php`

**Rationale:**
- Standard PHP mail handler
- Compatible with shared hosting (ISPmanager)
- No Node.js/serverless dependencies

---

### 10.2 SMTP Credentials

**Decision:** NOT included in frontend code

**Rationale:**
- Security risk to store in Git
- Client will configure separately
- PHP handler will contain credentials server-side

---

### 10.3 Server Requirements

**Minimum:**
- PHP 7.4+
- SMTP access
- SSL certificate (already configured)

**Not Required:**
- Database
- Node.js runtime
- Special server configuration

---

## 11. FILE STRUCTURE DECISIONS

### 11.1 Organization

```
/
index.html              # Main landing page
privacy.html            # Privacy policy
/css/
  styles.css           # All styles
/js/
  main.js              # Form handling
/assets/
  /logo/               # Logo files
  /icons/              # SVG icons
  presentation.pdf     # Sales presentation
  report-example.pdf   # Sample report
/design/
  DESIGN_CONCEPTS.md   # Three concepts + selection
  DESIGN_SYSTEM.md     # Complete design system
  DESIGN_DECISIONS.md  # This file
/qa/
  LANDING_PAGE_QA.md   # QA report
README.md              # Client documentation
```

**Rationale:**
- Clear separation of concerns
- Easy for client to find editable content
- Design documentation preserved
- QA trail maintained

---

## 12. .HTACCESS POLICY

**Decision:** Do not modify existing .htaccess

**Rationale:**
- Client specified existing redirects (www → non-www)
- Risk of breaking production configuration
- No rewrite rules needed for static site

**If Additional Rules Needed:** Present separately with explanation

---

## 13. SUCCESS CRITERIA

### Visual Quality Test

**Question:** "Does this look like a company charging 100,000+ RUB?"

**Checklist:**
- ✓ Premium typography
- ✓ Generous whitespace
- ✓ Restrained color palette
- ✓ No template-looking elements
- ✓ Professional, not trendy
- ✓ Confident, not shouty

---

### Business Quality Test

**Question:** "Will a busy executive understand the offer in 5 seconds?"

**Checklist:**
- ✓ Clear H1
- ✓ Obvious CTA
- ✓ Scannable process
- ✓ Concrete outcomes
- ✓ No marketing fluff

---

### Technical Quality Test

**Question:** "Can this be deployed on basic shared hosting?"

**Checklist:**
- ✓ Static HTML/CSS/JS
- ✓ PHP-ready form endpoint
- ✓ No database required
- ✓ No build process
- ✓ Works without Node.js

---

## 14. TRADE-OFFS ACKNOWLEDGED

### What We're NOT Doing

1. **No animations** - Adds complexity, potential performance issues
2. **No dark mode** - B2B trust favors light themes
3. **No blog/resources** - Out of scope for MVP
4. **No case studies** - No approved content available
5. **No testimonials** - Prohibited without real data
6. **No live chat** - Adds third-party dependency
7. **No cookie banner** - Not required for analytics-only cookies
8. **No multi-language** - Russian only for now

### Why These Trade-offs Are Acceptable

- Focus on core conversion goal
- Faster time to market
- Lower maintenance burden
- Cleaner, more focused message
- Can add later if needed

---

## 15. NEXT STEPS

1. Implement HTML structure based on design system
2. Build CSS using custom properties
3. Create form validation in vanilla JS
4. Ensure responsive behavior across all breakpoints
5. Run comprehensive QA (visual, functional, accessibility)
6. Document findings and fix critical/high issues
7. Create README for client handoff

---

*Design Decisions Document v1.0*  
*i-pro.tech B2B Landing Page*  
*Using ui-design skill for strategic direction*
