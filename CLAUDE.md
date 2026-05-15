# CLAUDE.md — Patient Case Converter

## What this project is
A static HTML/JS web app that generates a personalized Virtual Patient Card for dental clinics. Sent to patients via WhatsApp link. Hosted on GitHub Pages at https://jalonso986.github.io/patient-case-converter-template/

## File structure
- index.html — Single-page app. All screens (home, breakdown, timeline) live here. Uses inline script at the bottom.
- data.js — All patient data. Loaded before the inline script. Defines window.patientData.
- timeline-fix.js — Loaded between data.js and the inline script. Used to override timeline rendering.
- assets/ — Images: logo, patient photo, odontogram, icons.
- explanations/ — Treatment explanation infographics (one per treatment).

## Critical architecture facts

### Script loading order
1. data.js (defines patientData)
2. timeline-fix.js (our override layer)
3. Inline script in index.html (defines all render functions and app logic)

### IMPORTANT: function declaration scope
All render functions in index.html are declared as function foo(){} inside the inline script. This means they are LOCAL to that script scope. Overriding window.renderTimelineFull from timeline-fix.js does NOT affect calls to renderTimelineFull() made from within the inline script. To intercept rendering, use MutationObserver on #timelineScreenContent — do NOT use window overrides.

### Timeline rendering
- Home screen shows a horizontal scrolling card strip (rendered by renderTimeline).
- Clicking "Ver plan completo" navigates to #timeline screen and calls renderTimelineFull(patientData.timeline).
- renderTimelineFull is declared locally in index.html inline script — cannot be overridden from outside.
- timeline-fix.js must use MutationObserver to watch #timelineScreenContent and replace content after it is set.

### data.js timeline object structure
timeline: {
  image: "assets/plan-tratamiento.png",
  crop: true,
  startDate: "30 de junio",
  intro: "antes del verano tu sonrisa ya estará en marcha.",
  phases: [
    {
      date: "30 junio",
      title: "Fase inicial",          // optional
      emotion: "Tu boca sana es el punto de partida de todo lo que viene.",
      items: [
        { text: "Tratamos tu gingivitis", link: "explanations/gingivitis.png" },
        "Empezamos a alinear tu mordida"
      ],
      color: "#2a7c6f"
    }
  ]
}

## Current rendering architecture

### Home screen - renderTimeline(tl)
Renders the "TU PLAN EN VARIAS FASES" section as a horizontal scrolling card strip.
- Outer container: white card with border-radius 16px, border, padding 16px
- Header row: title left + "Ver plan completo ↗" link right (calls showScreen('timeline'))
- Cards strip: display:flex, overflow-x:auto, gap 12px, scrollbar hidden
- Each card: min-width 160px, border-radius 12px, padding 14px 12px
- Card content: numbered circle (teal, 28px) → phase title (12px bold) → items (11px, #666, joined by " · ") → date (12px bold teal)
- Auto-generates phase title via getTitleForPhase(phase): uses phase.title if exists, otherwise truncates first item to 20 chars
- Falls back to original image if no tl.phases

### Full timeline screen - renderTimelineFull(tl)
Renders the full "Ver plan completo" screen with vertical card timeline.
- Shows patient header via renderHeader()
- Title + intro text
- Vertical timeline: single grey line (#d8d8d8), dots all solid #2a7c6f
- Cards: white, border-radius 12px, subtle shadow
- Date bold teal, emotion italic grey, items plain text
- Falls back to image if no tl.phases

## data.js - phase structure
Each phase supports:
- date: string (required)
- title: string (optional - auto-generated if missing)
- emotion: string (required)
- items: array of strings or {text, link} objects (required)
- color: string (kept in data but UI uses #2a7c6f for all dots)

## Asset handling
- icon: path to treatment icon image. Use null if not available yet - card renders without icon.
- explanation: path to infographic PNG. Use null if not available yet - explanation button hidden.
- When assets are null, no broken images appear - graceful fallback required in render functions.

## Odontogram
- Currently provided as a static image by the user (exported from derec.ch)
- Future plan: generate odontogram as inline SVG from a list of affected tooth numbers in data.js
- Tooth numbering: ISO standard (FDI)

## Design system
- Primary teal: #2a7c6f
- Background card: #FAFAFA
- Card border: 1px solid #F0F0F0
- Card shadow: 0 2px 10px rgba(0,0,0,.06)
- Card radius: 10px
- Font: Arial/Helvetica
- Max width: 414px (mobile-first)
- Phase dot colors: #2a7c6f (inicio), #e8934a (verano), #4a9eb5 (otono), #c0392b (navidad)

## Commit conventions
- feat: new feature
- fix: bug fix
- style: visual/CSS only
- refactor: code restructure, no behavior change

## Deploy
Every push to main triggers GitHub Pages deploy automatically (~30s).
Check status at: https://github.com/jalonso986/patient-case-converter-template/actions

## Known issues
- Vertical line between phase dots on full timeline screen not yet visible (pending fix)
- Layout centering on mobile has been fixed via overflow-x:hidden on .app

## Workflow
- Claude Code is used for all code changes (NOT github.dev browser editor - too fragile)
- Changes via GitHub browser editor risk JS syntax errors due to quote escaping
- Always: make change → commit → wait 45s for Pages → verify on live URL
