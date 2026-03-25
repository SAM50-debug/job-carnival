# Job Carnival 2026 Landing Page

A conversion-focused single-page application designed to present and promote a job fair event with structured information flow and high visual clarity.

---

## Overview

This project is a marketing landing page built to communicate event details, showcase participating companies, and guide users toward registration or engagement.

The page is structured as a **conversion funnel**, where each section progressively builds trust and encourages action.

---

## Core Objectives

- Clearly present event information
- Build trust through company participation
- Guide users through a structured experience
- Maximize engagement via strategic CTAs

---

## Page Structure

The application is composed of sequential sections:

1. **Hero Section**  
   Introduces the event and presents the primary call-to-action.

2. **Company Grid**  
   Displays participating companies to establish credibility.

3. **Logo Marquee**  
   Reinforces scale through continuous logo display.

4. **Timeline**  
   Explains the event flow in a clear, step-based format.

5. **Why Attend**  
   Highlights value for participants.

6. **Poster Section**  
   Visual representation of the event.

7. **FAQ Section**  
   Addresses common user concerns.

8. **Sticky CTA**  
   Persistent call-to-action for conversion.

9. **Bottom Conversion Section**  
   Final engagement prompt.

---

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS with centralized variables
- **Assets:** Static files served from `/public/assets`

---

## Project Structure


src/
components/ # Section components
assets/ # Static assets (logos, posters)
App.jsx # Page composition
main.jsx # Entry point

public/
assets/ # External static resources


---

## Design System

The UI is built on a centralized design system:

- Consistent spacing and section padding
- Defined color palette:
  - Primary: #C8464B
  - Background: #FDFEFE
  - Surface layers
- Clean, minimal SaaS-style layout

---

## Interaction Model

- Scroll-driven experience
- Lightweight animations for engagement
- Persistent CTA for conversion focus

---

## Key Characteristics

- Fully static (no backend dependency)
- Fast load via Vite bundling
- Modular component structure
- Optimized for clarity and readability

---

## Use Cases

- Event landing pages
- Marketing funnels
- Institutional or college event promotion

---

## Limitations

- No dynamic data fetching
- No user authentication or backend integration
- Static content updates required for changes

---

## License

MIT
