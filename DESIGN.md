# Automations 365 --- HR DMS Style Reference

> automation blue on clean enterprise surfaces

**Theme:** light

Automations 365 uses a clean, trustworthy enterprise visual language
derived from the supplied blue logo. The interface is anchored by a
strong royal automation blue (#1747D1), supported by a brighter action
blue (#2563EB) and a light periwinkle surface family. Blue is
concentrated on primary actions, active navigation, links, focus states,
and key icons rather than used as a heavy page fill. Surfaces progress
from white (#FFFFFF) through cool blue-white (#F7F9FF) to pale
periwinkle (#EEF3FF), keeping the HR document-management interface calm
and highly readable. Components remain geometric and approachable:
8--12px card corners, 8px inputs, compact rounded actions, 16--24px
padding, and subtle 1px borders. The result should feel like a polished
Microsoft-adjacent business application rather than a marketing website.

## Tokens --- Colors

  -----------------------------------------------------------------------------------------------------------------------------------------
  Name             Value                                                                   Token                           Role
  ---------------- ----------------------------------------------------------------------- ------------------------------- ----------------
  Automation Blue  `#1747D1`                                                               `--color-automation-blue`       Primary action
                                                                                                                           fills, active
                                                                                                                           nav, link text,
                                                                                                                           icon strokes,
                                                                                                                           key borders ---
                                                                                                                           concentrated
                                                                                                                           blue that
                                                                                                                           signals
                                                                                                                           interactivity
                                                                                                                           and energy
                                                                                                                           against the
                                                                                                                           achromatic
                                                                                                                           canvas

  Cloud Blue       `#F7F9FF`                                                               `--color-cloud-blue`            Soft section
                                                                                                                           backgrounds,
                                                                                                                           card fills,
                                                                                                                           hover surfaces
                                                                                                                           --- barely-there
                                                                                                                           blue tint that
                                                                                                                           creates
                                                                                                                           atmospheric
                                                                                                                           depth without
                                                                                                                           committing to
                                                                                                                           color

  Periwinkle       `#EEF3FF`                                                               `--color-periwinkle-surface`    Slightly
  Surface                                                                                                                  stronger
                                                                                                                           blue-tinted for
                                                                                                                           tagged surfaces,
                                                                                                                           highlighted
                                                                                                                           cards, badge
                                                                                                                           backgrounds

  Blue Border      `#D8E3FF`                                                               `--color-blue-border`           Outlined action
                                                                                                                           borders, soft
                                                                                                                           decorative
                                                                                                                           borders,
                                                                                                                           glow/shadow
                                                                                                                           tints --- a
                                                                                                                           mid-blue for
                                                                                                                           quieter emphasis

  Ink Black        `#111827`                                                               `--color-ink-black`             Primary
                                                                                                                           headings,
                                                                                                                           dominant body
                                                                                                                           text,
                                                                                                                           high-contrast
                                                                                                                           borders, footer
                                                                                                                           surfaces --- the
                                                                                                                           load-bearing
                                                                                                                           neutral

  Carbon           `#172033`                                                               `--color-carbon`                Secondary
                                                                                                                           headings, dark
                                                                                                                           UI blocks, badge
                                                                                                                           text on light
                                                                                                                           fills

  Graphite         `#334155`                                                               `--color-graphite`              Input field
                                                                                                                           text, subdued
                                                                                                                           body text, card
                                                                                                                           detail labels

  Iron             `#64748B`                                                               `--color-iron`                  Mid-tone icon
                                                                                                                           strokes,
                                                                                                                           secondary
                                                                                                                           metadata, less
                                                                                                                           prominent UI
                                                                                                                           labels

  Slate            `#6B7280`                                                               `--color-slate`                 Muted body text,
                                                                                                                           helper text,
                                                                                                                           placeholder
                                                                                                                           text, tertiary
                                                                                                                           labels

  Mist             `#9CA3AF`                                                               `--color-mist`                  Input borders,
                                                                                                                           disabled states,
                                                                                                                           de-emphasized
                                                                                                                           dividers

  Fog              `#E2E8F0`                                                               `--color-fog`                   Hairline
                                                                                                                           dividers, card
                                                                                                                           borders,
                                                                                                                           structural
                                                                                                                           separators

  Paper            `#ffffff`                                                               `--color-paper`                 Page canvas,
                                                                                                                           card surfaces,
                                                                                                                           button text on
                                                                                                                           blue fills,
                                                                                                                           input fields

  Warning Amber    `#FEF3C7`                                                               `--color-warning-amber`         Accent surface
                                                                                                                           for special
                                                                                                                           callouts,
                                                                                                                           limited-use
                                                                                                                           highlight wash
                                                                                                                           (badge spotlight
                                                                                                                           or feature
                                                                                                                           emphasis)

  Success Green    `#16A34A`                                                               `--color-success-green`         Green action
                                                                                                                           color for filled
                                                                                                                           buttons,
                                                                                                                           selected
                                                                                                                           navigation
                                                                                                                           states, and
                                                                                                                           focused
                                                                                                                           conversion
                                                                                                                           moments

  Automation       `linear-gradient(90deg, #2563EB, #60A5FA, #D8E3FF, #93C5FD, #2563EB)`   `--color-automation-gradient`   Gradient stops
  Gradient                                                                                                                 for hero washes
                                                                                                                           and decorative
                                                                                                                           banners
  -----------------------------------------------------------------------------------------------------------------------------------------

## Automations 365 Brand Adaptation

The supplied Automations 365 logo is the source of truth for brand
direction. Use royal/deep blue as the dominant brand signal, with
brighter blue for interactive emphasis and pale periwinkle-blue for
quiet surfaces. White in the logo should translate to generous white
space in the application.

### Application Semantic Colors

  -----------------------------------------------------------------------------------------
  Name             Value               Token                          Role
  ---------------- ------------------- ------------------------------ ---------------------
  Brand Blue       `#1747D1`           `--color-brand-blue`           Primary buttons,
                                                                      active navigation,
                                                                      important links,
                                                                      selected states

  Action Blue      `#2563EB`           `--color-action-blue`          Hover/focus emphasis,
                                                                      secondary blue icons,
                                                                      progress

  Deep Blue        `#12359B`           `--color-deep-blue`            Pressed primary
                                                                      actions,
                                                                      high-emphasis brand
                                                                      details

  Cloud Blue       `#F7F9FF`           `--color-cloud-blue`           Main subtle
                                                                      application
                                                                      background

  Periwinkle       `#EEF3FF`           `--color-periwinkle-surface`   Selected rows,
  Surface                                                             document-card
                                                                      highlights,
                                                                      informational
                                                                      surfaces

  Blue Border      `#D8E3FF`           `--color-blue-border`          Focus rings and
                                                                      brand-tinted borders

  Success          `#16A34A`           `--color-success`              Successful upload,
                                                                      available/completed
                                                                      status

  Success Surface  `#F0FDF4`           `--color-success-surface`      Success messages and
                                                                      badges

  Warning          `#D97706`           `--color-warning`              Caution and
                                                                      replacement warnings

  Warning Surface  `#FFFBEB`           `--color-warning-surface`      Warning messages

  Danger           `#DC2626`           `--color-danger`               Delete/destructive
                                                                      actions and errors

  Danger Surface   `#FEF2F2`           `--color-danger-surface`       Error messages and
                                                                      destructive
                                                                      confirmation emphasis

  Info             `#2563EB`           `--color-info`                 Informational states

  White            `#FFFFFF`           `--color-paper`                Cards, table
                                                                      surfaces, inputs
  -----------------------------------------------------------------------------------------

Status colors are semantic only. Do not use green, amber, or red
decoratively.

### HR DMS Application Guidance

This project is an internal HR document-management application, not the
Employment Hero marketing site. Favor compact application typography and
data density over oversized hero typography.

-   Use the Automations 365 logo in the application header on a white or
    deep-blue-compatible surface.
-   Use a clean Employee Table as the primary home-page pattern.
-   Use white document cards with subtle borders for Birth Certificate
    and Certificate of Employment.
-   Use Brand Blue for Upload and other primary actions.
-   Use neutral/outlined treatments for View and Replace.
-   Use Danger Red only for Delete and destructive confirmation.
-   Use pale blue for selected table rows, focus, informational empty
    states, and subtle grouping.
-   Prefer 8px button/input radius for enterprise controls; pill shapes
    are reserved for badges/status chips.
-   Keep page backgrounds primarily white or Cloud Blue.
-   Avoid large gradients in core application screens.
-   Avoid oversized marketing headings; page titles should normally be
    24--32px.
-   Use Segoe UI, Inter, or DM Sans for application UI. Saiga is
    optional and should not be required.

## Tokens --- Typography

### DM Sans --- UI and body workhorse. Weight 400 for body copy, 500 for emphasized text, 600 for subheadings, 700 for compact button labels. Neutral letter-spacing (normal) keeps long-form readable. Handles everything Saiga leaves behind --- navigation, form fields, cards, tables, footnotes. · `--font-dm-sans`

-   **Substitute:** Inter (400, 500, 600, 700)
-   **Weights:** 400, 500, 600, 700
-   **Sizes:** 10px, 12px, 14px, 16px, 18px, 24px, 28px, 36px
-   **Line height:** 1.00--1.67
-   **Role:** UI and body workhorse. Weight 400 for body copy, 500 for
    emphasized text, 600 for subheadings, 700 for compact button labels.
    Neutral letter-spacing (normal) keeps long-form readable. Handles
    everything Saiga leaves behind --- navigation, form fields, cards,
    tables, footnotes.

### Saiga --- Display and heading typeface. Custom geometric sans at extreme weights (800--1000) creates near-black slab headlines. Tight negative tracking (-0.002em to -0.008em) tightens letterforms at scale. Used only for marketing-facing headlines and the largest type moments --- never for UI or body text. · `--font-saiga`

-   **Substitute:** Plus Jakarta Sans (800, 900)
-   **Weights:** 800, 900, 1000
-   **Sizes:** 32px, 38px, 42px, 60px, 80px
-   **Line height:** 1.06--1.14
-   **Letter spacing:** -0.64px at 80px, -0.42px at 60px, -0.252px at
    42px, -0.19px at 38px, -0.096px at 32px
-   **Role:** Display and heading typeface. Custom geometric sans at
    extreme weights (800--1000) creates near-black slab headlines. Tight
    negative tracking (-0.002em to -0.008em) tightens letterforms at
    scale. Used only for marketing-facing headlines and the largest type
    moments --- never for UI or body text.

### Arial --- Arial --- detected in extracted data but not described by AI · `--font-arial`

-   **Weights:** 400, 600
-   **Sizes:** 13px, 16px
-   **Line height:** 1, 1.2
-   **Role:** Arial --- detected in extracted data but not described by
    AI

### Type Scale

  Role         Size   Line Height   Letter Spacing   Token
  ------------ ------ ------------- ---------------- ---------------------
  tiny         10px   1             ---              `--text-tiny`
  small        12px   1.67          ---              `--text-small`
  caption      14px   1.55          ---              `--text-caption`
  body-sm      16px   1.5           ---              `--text-body-sm`
  body         18px   1.43          ---              `--text-body`
  subheading   32px   1.14          -0.096px         `--text-subheading`
  heading-sm   38px   1.1           -0.19px          `--text-heading-sm`
  heading      42px   1.1           -0.25px          `--text-heading`
  heading-lg   60px   1.08          -0.42px          `--text-heading-lg`
  display      80px   1.06          -0.64px          `--text-display`

## Tokens --- Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

  Name   Value   Token
  ------ ------- ----------------
  4      4px     `--spacing-4`
  8      8px     `--spacing-8`
  12     12px    `--spacing-12`
  16     16px    `--spacing-16`
  20     20px    `--spacing-20`
  24     24px    `--spacing-24`
  28     28px    `--spacing-28`
  32     32px    `--spacing-32`
  36     36px    `--spacing-36`
  40     40px    `--spacing-40`
  48     48px    `--spacing-48`
  52     52px    `--spacing-52`
  56     56px    `--spacing-56`
  64     64px    `--spacing-64`
  80     80px    `--spacing-80`

### Border Radius

  Element     Value
  ----------- --------
  tags        9999px
  cards       12px
  badges      8px
  inputs      8px
  buttons     32px
  listItems   8px

### Layout

-   **Page max-width:** 1200px
-   **Section gap:** 80px
-   **Card padding:** 24px
-   **Element gap:** 16px

## Components

### Primary Pill Button

**Role:** Main call-to-action (Request a demo, Learn more)

Filled #1747D1 background, #ffffff text, 32px border-radius (full pill),
12px 16px padding, DM Sans 14--16px weight 700. Arrow icon in white at
trailing edge. No shadow --- depth comes from the saturated fill against
the achromatic canvas.

### Outlined Ghost Button

**Role:** Secondary action on light surfaces

Transparent fill, 1px #D8E3FF border, #1747D1 text, 32px radius, 12px
16px padding, DM Sans 14px weight 600. Inherits a Blue Border border to
keep the blue language even when the button doesn't commit to a fill.

### Dark Pill Button

**Role:** Inverse CTA (e.g. notification bar 'Learn more')

White fill, #111827 text, 32px radius, 6px 12px padding, DM Sans
13--14px weight 600. The notification bar's compact white pill is the
smallest-scale button variant --- it sits on a dark blue band and reads
as a single bright spot.

### Hero Section

**Role:** Above-the-fold headline and CTA

White canvas, centered content stack. Eyebrow label in DM Sans 12--14px
weight 500 with #1747D1 text inside a #F7F9FF rounded pill (1px border).
Display headline in Saiga 80px weight 900, #111827, letter-spacing
-0.64px, two-line stack. Subheadline in DM Sans 18px weight 400,
#334155, max-width \~640px. Primary CTA centered below.

### Audience Card

**Role:** Three-column persona cards (For Businesses / Employees / Job
Seekers)

#F7F9FF or #EEF3FF background, 12--20px radius, 24px padding. Bold black
title in Saiga 32px, primary blue 'Learn more' pill button. Product
screenshot or illustration inset below. No shadow --- separation is
achieved through the blue-tinted fill and 1px #E2E8F0 border at most.

### Notification Bar

**Role:** Top promotional strip

Dark blue background (\~#2d0a5 or near-black blue), white DM Sans
13--14px text, 6--8px vertical padding, centered horizontally. Contains
a compact white pill CTA at the right.

### Social Proof Strip

**Role:** Review platform logos beneath hero

White background, single row of platform marks (Capterra, Trustpilot,
Google) with small star ratings in DM Sans 12px weight 400 #64748B. No
card wrapper --- logos sit directly on the canvas with 32--48px
horizontal gaps.

### Customer Logo Carousel

**Role:** Brand trust strip

Section with small uppercase eyebrow label 'TRUSTED BY 300K+ HAPPY
CUSTOMERS' in DM Sans 12px weight 600 #6B7280, letter-spacing +0.5px.
Logos rendered in monochrome #334155 or #64748B, evenly spaced in a
single row with chevron navigation arrows on either end.

### Text Input

**Role:** Form fields

1px #E2E8F0 border, 8px radius, 12px 16px padding. Placeholder in
#9CA3AF DM Sans 14--16px. Active value in #334155. Focus state shifts
border to #1747D1 with optional subtle #D8E3FF ring.

### Tag / Pill Badge

**Role:** Inline labels, taxonomy tags

9999px radius, 4--8px vertical padding, 8--12px horizontal padding, DM
Sans 10--12px weight 500. Filled variants: #F7F9FF bg with #1747D1 text.
Outlined: 1px #D8E3FF border with #1747D1 text.

### Footer Link List

**Role:** Site map navigation

DM Sans 14--16px weight 400 #6B7280 link color, 8--12px row gap. Hover
shifts to #1747D1. No underlines; weight contrast signals interactivity.

### Star Rating Cluster

**Role:** Review display (Capterra, Trustpilot)

5 stars in #FEF3C7 amber with hollow-fill star for partial rating,
followed by DM Sans 12px weight 400 #64748B descriptor. Stars are
typically 12--14px glyphs, no text between them.

### Region Switcher

**Role:** Country selector in header

Outlined button with 1px #E2E8F0 border, 8px radius, DM Sans 14px weight
400, #334155 text. Country name in bold, 'Change Region' label in normal
weight inside a small dropdown container.

## Do's and Don'ts

### Do

-   Use Saiga 800--1000 weight for any display headline above 32px; pair
    it with tight negative tracking per the type scale
-   Apply #1747D1 as a concentrated accent --- filled pills, link text,
    active icon strokes --- not as broad surface fills
-   Layer surfaces using the blue-tinted stack: #ffffff → #F7F9FF →
    #EEF3FF, never introduce neutral grays for section backgrounds
-   Use 32px border-radius for all primary interactive elements
    (buttons, tag-like links) to reinforce the pill language
-   Set button padding to 12px 16px and maintain 700 weight DM Sans for
    filled CTAs to preserve the compact confident button
-   Let headings and body copy sit directly on white with no card
    wrappers --- only surround content in blue-tinted cards when the
    content needs visual grouping
-   Use 1px hairline borders in #E2E8F0 for structural separation; avoid
    box-shadows to maintain the flat precise feel

### Don't

-   Don't use Saiga at weights below 700 or for body copy --- its
    geometric character only works at scale
-   Don't dilute #1747D1 with opacity washes, tints, or desaturated
    variants for backgrounds; the blue must remain a clear committed
    brand hue
-   Don't use square corners (0--4px) for any user-facing interactive
    element; the system is built on 8px minimum and 32px for actions
-   Don't apply box-shadows to cards or buttons --- separation comes
    from fill color and 1px borders only
-   Don't mix #111827 and #172033 arbitrarily; reserve #111827 for the
    highest-emphasis headings and #172033 for secondary dark text and
    dark surfaces
-   Don't introduce additional accent hues; success green (#16A34A) and
    amber (#FEF3C7) are reserved for status/emphasis only, never for
    decoration
-   Don't stretch DM Sans beyond 36px --- display moments always belong
    to Saiga

## Surfaces

  -------------------------------------------------------------------------
  Level             Name           Value             Purpose
  ----------------- -------------- ----------------- ----------------------
  0                 Paper White    `#ffffff`         Primary page canvas
                                                     and base reference
                                                     surface

  1                 Cloud Blue     `#F7F9FF`         Soft section
                                                     background that hints
                                                     at blue without being
                                                     explicit

  2                 Periwinkle     `#EEF3FF`         Highlighted cards,
                    Surface                          tagged surfaces,
                                                     elevated callouts

  3                 Blue Wash      `#D8E3FF`         Decorative gradient
                                                     surface, hero ambient
                                                     backgrounds

  4                 Warning Amber  `#FEF3C7`         Special accent surface
                                                     for limited-use
                                                     emphasis
  -------------------------------------------------------------------------

## Elevation

The system is essentially flat. Elevation is communicated through fill
color shifts in the blue-tinted surface stack (white → #F7F9FF →
#EEF3FF) and 1px hairline borders in #E2E8F0. No drop shadows are used
on cards, buttons, or any interactive element. The only shadow-like
effect detected (#D8E3FF glow on certain hover states) is a soft blue
tint, not a directional shadow. This flatness is deliberate: it keeps
the heavy Saiga headlines as the sole focal point and prevents the
interface from feeling layered or busy.

## Imagery

Imagery is product-led and illustration-augmented. The hero uses a wide
cinematic photograph (person at desk with tablet) softened by a
duotone-like overlay of blue and cyan --- a stylized composite of
floating app icons (calendar, job board, data, messaging) suggests a
connected ecosystem. Below the hero, audience cards embed realistic
product UI mockups (dashboard snippets, mobile screens, candidate
profiles) rendered with soft drop-shadow or floating depth against
blue-tinted fills. A small green character mascot appears as a section
accent between the hero and the audience cards. Iconography throughout
is two-tone filled glyphs in app-icon style, used in the hero photograph
and in product cards. Photography is warm-toned, slightly desaturated,
and treated with colored overlay washes rather than raw edges.

## Layout

Page is a centered max-width container (\~1200px) with full-width
sections. The hero is a centered single-column stack: eyebrow pill,
massive two-line Saiga headline, subheadline paragraph, single primary
CTA. Below the hero sits a full-bleed cinematic image band, then a
compact social proof row, then a mascot-led transition into a 3-column
audience card grid (equal-width cards, 24px gutter, identical
structure). The customer logo strip is a single full-width row with
chevron controls. Section rhythm is consistent: 80px vertical gaps
between major bands, alternating white and #F7F9FF/blue-tinted
backgrounds create gentle visual separation. Navigation is a minimal top
bar: logo left, three or four text links center, search + login right.
No sidebar, no sticky header complexity. Content is always centered on
the page axis; asymmetric layouts are absent.

## Agent Prompt Guide

## Quick Color Reference

-   text (primary): #111827
-   text (secondary): #334155
-   text (muted): #6B7280
-   background: #ffffff
-   surface (soft): #F7F9FF
-   surface (accent): #EEF3FF
-   border (hairline): #E2E8F0
-   accent (brand): #1747D1
-   primary action: #1747D1 (filled action)

## Example Component Prompts

1.  Create a Primary Action Button: #1747D1 background, #ffffff text,
    9999px radius, compact pill padding. Use this filled treatment for
    the main CTA.

2.  **Audience Card**: #EEF3FF background, 12px radius, 24px padding.
    Title in Saiga 32px weight 800, #111827, letter-spacing -0.096px.
    Subtitle in DM Sans 16px weight 400, #334155. Filled blue 'Learn
    more' pill button (#1747D1, 32px radius, white text, 700 weight).
    Product screenshot inset below the text block with soft natural
    integration.

3.  **Social Proof Row**: White background, single horizontal row, 48px
    gaps between platform logos (Capterra, Trustpilot, Google). Stars in
    #FEF3C7 amber, DM Sans 12px weight 400 #64748B for rating labels.

4.  **Customer Logo Strip**: Eyebrow label 'TRUSTED BY 300K+ HAPPY
    CUSTOMERS' --- DM Sans 12px weight 600, #6B7280, letter-spacing
    +0.5px, centered. Logo row in monochrome #334155, evenly spaced,
    with light chevron nav controls on either end.

## Gradient System

Gradients are used sparingly and always in the brand-blue family. The
primary multi-stop gradient runs #2563EB → #60A5FA → #D8E3FF → #93C5FD →
#2563EB, suitable for hero ambient backgrounds, decorative banners, or
section transition washes. A radial variant pairs #2563EB with #60A5FA
for circular spotlight effects. Soft linear washes transition from white
(#ffffff) to #D8E3FF for upward-fading section backgrounds. Gradients
are never applied to text, never used as button fills, and should occupy
at most 10--15% of any given page's visual area.

## Similar Brands

-   **Deel** --- Same single-blue accent strategy with pill CTAs and
    centered SaaS hero patterns
-   **Rippling** --- Identical blue-tinted surface layering and
    minimal-border card treatment
-   **Gusto** --- HR/people-ops space with light canvas, blue brand
    accent, and rounded pill buttons
-   **BambooHR** --- Clean white SaaS hero with single-color accent and
    flat component treatment
-   **Linear** --- Disciplined typographic hierarchy with weight
    contrast as the primary design move

## Quick Start

### CSS Custom Properties

``` css
:root {
  /* Colors */
  --color-brand-blue: #1747D1;
  --color-action-blue: #2563EB;
  --color-deep-blue: #12359B;
  --color-success: #16A34A;
  --color-success-surface: #F0FDF4;
  --color-warning: #D97706;
  --color-warning-surface: #FFFBEB;
  --color-danger: #DC2626;
  --color-danger-surface: #FEF2F2;
  --color-info: #2563EB;
  --color-automation-blue: #1747D1;
  --color-cloud-blue: #F7F9FF;
  --color-periwinkle-surface: #EEF3FF;
  --color-blue-border: #D8E3FF;
  --color-ink-black: #111827;
  --color-carbon: #172033;
  --color-graphite: #334155;
  --color-iron: #64748B;
  --color-slate: #6B7280;
  --color-mist: #9CA3AF;
  --color-fog: #E2E8F0;
  --color-paper: #ffffff;
  --color-warning-amber: #FEF3C7;
  --color-success-green: #16A34A;
  --color-automation-gradient: #2563EB;
  --gradient-automation-gradient: linear-gradient(90deg, #2563EB, #60A5FA, #D8E3FF, #93C5FD, #2563EB);

  /* Typography — Font Families */
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-saiga: 'Saiga', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-tiny: 10px;
  --leading-tiny: 1;
  --text-small: 12px;
  --leading-small: 1.67;
  --text-caption: 14px;
  --leading-caption: 1.55;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --text-body: 18px;
  --leading-body: 1.43;
  --text-subheading: 32px;
  --leading-subheading: 1.14;
  --tracking-subheading: -0.096px;
  --text-heading-sm: 38px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.19px;
  --text-heading: 42px;
  --leading-heading: 1.1;
  --tracking-heading: -0.25px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1.08;
  --tracking-heading-lg: -0.42px;
  --text-display: 80px;
  --leading-display: 1.06;
  --tracking-display: -0.64px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
  --font-weight-w1000: 1000;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 28px;
  --radius-3xl-2: 32px;
  --radius-full: 50px;
  --radius-full-2: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 12px;
  --radius-badges: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 32px;
  --radius-listitems: 8px;

  /* Surfaces */
  --surface-paper-white: #ffffff;
  --surface-cloud-blue: #F7F9FF;
  --surface-periwinkle-surface: #EEF3FF;
  --surface-blue-wash: #D8E3FF;
  --surface-warning-amber: #FEF3C7;
}
```

### Tailwind v4

``` css
@theme {
  /* Colors */
  --color-brand-blue: #1747D1;
  --color-action-blue: #2563EB;
  --color-deep-blue: #12359B;
  --color-success: #16A34A;
  --color-success-surface: #F0FDF4;
  --color-warning: #D97706;
  --color-warning-surface: #FFFBEB;
  --color-danger: #DC2626;
  --color-danger-surface: #FEF2F2;
  --color-info: #2563EB;
  --color-automation-blue: #1747D1;
  --color-cloud-blue: #F7F9FF;
  --color-periwinkle-surface: #EEF3FF;
  --color-blue-border: #D8E3FF;
  --color-ink-black: #111827;
  --color-carbon: #172033;
  --color-graphite: #334155;
  --color-iron: #64748B;
  --color-slate: #6B7280;
  --color-mist: #9CA3AF;
  --color-fog: #E2E8F0;
  --color-paper: #ffffff;
  --color-warning-amber: #FEF3C7;
  --color-success-green: #16A34A;
  --color-automation-gradient: #2563EB;

  /* Typography */
  --font-dm-sans: 'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-saiga: 'Saiga', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-tiny: 10px;
  --leading-tiny: 1;
  --text-small: 12px;
  --leading-small: 1.67;
  --text-caption: 14px;
  --leading-caption: 1.55;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --text-body: 18px;
  --leading-body: 1.43;
  --text-subheading: 32px;
  --leading-subheading: 1.14;
  --tracking-subheading: -0.096px;
  --text-heading-sm: 38px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.19px;
  --text-heading: 42px;
  --leading-heading: 1.1;
  --tracking-heading: -0.25px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 1.08;
  --tracking-heading-lg: -0.42px;
  --text-display: 80px;
  --leading-display: 1.06;
  --tracking-display: -0.64px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 28px;
  --radius-3xl-2: 32px;
  --radius-full: 50px;
  --radius-full-2: 9999px;
}
```

------------------------------------------------------------------------

## Automations 365 HR DMS Component Overrides

These rules override any marketing-oriented component guidance above
when building this demo.

### Application Header

-   White surface with a 1px `#E2E8F0` bottom border.
-   Automations 365 logo aligned left.
-   Keep the header compact (approximately 56--64px high).
-   Do not use a promotional/notification bar.

### Employee Table

-   White table surface with `#E2E8F0` structural borders.
-   Header cells: `#F8FAFC` or `#F7F9FF`, 12--14px semibold text.
-   Body text: `#334155`, 14px.
-   Employee name may use `#111827` semibold.
-   Hover row: `#F7F9FF`.
-   Selected/focused row: `#EEF3FF`.
-   Row actions use Brand Blue (`#1747D1`).
-   Avoid heavy shadows.

### Document Card

-   White background.
-   1px `#E2E8F0` border.
-   12px radius.
-   20--24px padding.
-   Document-type title: 16--18px semibold `#111827`.
-   Metadata: 12--14px `#64748B`.
-   Empty state may use a pale blue icon container (`#EEF3FF`) with
    Brand Blue iconography.
-   Existing-document state can use a subtle success indicator, but do
    not turn the entire card green.

### Buttons

-   Primary / Upload: `#1747D1` background, white text; hover `#12359B`.
-   Secondary / View / Replace: white background, `#334155` text,
    `#CBD5E1` border; blue hover/focus.
-   Destructive / Delete: prefer a subtle outlined/text treatment by
    default; `#DC2626` text and destructive confirmation emphasis.
-   Application buttons should generally use 8px radius rather than 32px
    marketing pills.

### Inputs and File Upload

-   White background, 1px `#CBD5E1` border, 8px radius.
-   Focus border `#2563EB` with a subtle `#D8E3FF` ring.
-   File drop/upload zones may use `#F7F9FF` with dashed `#B9CBF8`
    border.

### Dialogs

-   White surface, 12px radius, restrained shadow only if required to
    separate the modal from its overlay.
-   Destructive confirmation uses red only for the destructive action
    and supporting warning icon/text.
-   Primary focus remains on clarity and accessibility.

### Status Badges

-   Uploaded/Available: success green on `#F0FDF4`.
-   Missing/Not uploaded: neutral slate on `#F8FAFC`.
-   Processing: Brand/Action Blue on `#EEF3FF`.
-   Error: danger red on `#FEF2F2`.
-   Use pill radius for badges only.

### Accessibility

-   Maintain WCAG-friendly text/background contrast.
-   Never communicate document status by color alone; pair color with
    text and/or an icon.
-   Ensure visible keyboard focus using the blue focus treatment.
