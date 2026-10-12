<div align="center">
  <img src="assets/banner.svg" alt="reception-invitation banner" width="100%">

  <p><code>Reception edition of the digital wedding invitation, focused on a single event.</code></p>

  <a href="https://sajid-dilruba-reception.vercel.app/"><img src="https://img.shields.io/badge/LIVE_SITE-open-6366f1?style=for-the-badge&labelColor=0B0E1A&logo=vercel&logoColor=8b7cf6" alt="Live site"></a>
  <img src="https://img.shields.io/badge/REPO-private-8b7cf6?style=for-the-badge&labelColor=0B0E1A&logo=github&logoColor=8b7cf6" alt="Private repository">
  <br>
  <img src="https://img.shields.io/badge/Next.js-16-0B0E1A?style=flat-square&logo=nextdotjs&logoColor=8b7cf6" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-0B0E1A?style=flat-square&logo=react&logoColor=8b7cf6" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-0B0E1A?style=flat-square&logo=typescript&logoColor=8b7cf6" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-0B0E1A?style=flat-square&logo=tailwindcss&logoColor=8b7cf6" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-12-0B0E1A?style=flat-square&logo=framer&logoColor=8b7cf6" alt="Framer Motion">
</div>

<img src="assets/divider.svg" alt="" width="100%">

## ◈ Overview

A trimmed variant of the main invitation built for the wedding reception. The page is short: hero, a written invitation, live countdown, reception details and a venue section with a maps link. The gallery, scratch card, love story, RSVP and guest wishes sections of the main version are not included.

It is a sibling of [my-wedding-invitation](https://github.com/Saji-d/my-wedding-invitation) and shares its stack and design language (burgundy, gold and ivory with Great Vibes and Playfair Display). Content comes from a single typed config file, `src/config/wedding.ts`.

<div align="center">
  <img src="docs/preview.webp" alt="Design preview from the main invitation" width="70%">
  <br><sub>Preview of the shared visual style, taken from the main invitation.</sub>
</div>

<img src="assets/divider.svg" alt="" width="100%">

## ◈ Page Flow

```mermaid
flowchart LR
    OPEN[OpeningScreen] --> H[Hero]
    H --> I[ReceptionInvitation]
    I --> C[Countdown]
    C --> D[ReceptionDetails]
    D --> V[Venue]
    V --> E[Closing]
    CFG[config/wedding.ts] -.-> H
    CFG -.-> C
    CFG -.-> V
    MUSIC[MusicPlayer] -.-> OPEN
```

<img src="assets/divider.svg" alt="" width="100%">

## ◈ Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling and motion | Tailwind CSS 4, Framer Motion |
| Utilities | date-fns, react-icons |
| Hosting | Vercel |

<img src="assets/divider.svg" alt="" width="100%">

## ◈ Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

No environment variables are required. Edit `src/config/wedding.ts` to change the content.

<img src="assets/divider.svg" alt="" width="100%">

## ◈ Author

**Sajidur Rahman Sajid**: Full-Stack Developer and AI engineer from Dhaka.

<p>
  <a href="https://www.sajidur.me"><img src="https://img.shields.io/badge/Portfolio-0B0E1A?style=flat-square&logo=googlechrome&logoColor=9B8CFA" alt="Portfolio"></a>
  <a href="https://www.linkedin.com/in/sajidur-rahman-sajid/"><img src="https://img.shields.io/badge/LinkedIn-0B0E1A?style=flat-square&logo=linkedin&logoColor=8B7CF6" alt="LinkedIn"></a>
  <a href="https://github.com/Saji-d"><img src="https://img.shields.io/badge/GitHub-0B0E1A?style=flat-square&logo=github&logoColor=EEF0FA" alt="GitHub"></a>
  <a href="mailto:sajidsajidurrahman99@gmail.com"><img src="https://img.shields.io/badge/Email-0B0E1A?style=flat-square&logo=gmail&logoColor=9B8CFA" alt="Email"></a>
</p>

<sub>Built with love for a very special day.</sub>
