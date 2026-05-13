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
- Home screen shows a cropped image preview of the timeline.
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
      emotion: "Tu boca sana es el punto de partida de todo lo que viene.",
      items: [
        { text: "Tratamos tu gingivitis", link: "explanations/gingivitis.png" },
        "Empezamos a alinear tu mordida"
      ],
      color: "#2a7c6f"
    }
  ]
}

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
- timeline-fix.js currently broken: uses window override instead of MutationObserver. Pending fix.
