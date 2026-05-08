# Gamesfield MVP — Design Prototype

> The AI workspace for indie game developers. Keep your art style, characters, and world lore consistent across 23+ AI tools.

This repo contains the full HTML/CSS/JS prototype for the Gamesfield MVP — built as a Higgsfield-inspired design system with a dark game-dev aesthetic.

---

## 🚀 Live Prototype

Open `pages/index.html` in your browser and navigate through the full flow.

**No build step required** — pure HTML/CSS/JS, works offline.

---

## 📁 Structure

```
gamesfield-mvp/
├── pages/                  ← Wired prototype (start here)
│   ├── index.html          ← Home / Explore page
│   ├── onboarding.html     ← 5-step sign-up flow
│   ├── generate-art.html   ← AI art generation workspace
│   └── world-builder.html  ← Node-based world canvas
│
├── docs/                   ← Design iterations / reference
│   ├── gamesfield-home-v1.html     ← Initial landing page
│   ├── gamesfield-home-v2.html     ← Higgsfield-cloned home
│   ├── gamesfield-workspace.html   ← Workspace standalone
│   └── gamesfield-worldbuilder.html ← World builder standalone
│
└── README.md
```

---

## 🗺️ User Flow

```
Home (index.html)
  └─→ Onboarding (onboarding.html)        ← "Claim early access"
        └─→ World Builder (world-builder.html)   ← after sign up
        └─→ Generate Art (generate-art.html)     ← after sign up

Home → Generate Art                        ← nav / tool cards
Home → World Builder                       ← nav / World Builder card

Generate Art → World Builder               ← sidebar shortcut
World Builder → Generate Art               ← header button
```

All pages share a **persistent floating nav bar** (bottom centre) for instant screen switching.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0f1113` |
| Surface | `#1c1e20` |
| Brand (amber) | `#FE9E17` |
| Accent (lime) | `#d1fe17` |
| Font — Display | Bebas Neue |
| Font — Body | DM Sans |
| Font — Mono | JetBrains Mono |

---

## 📄 Pages

### `index.html` — Home / Explore
Higgsfield `/` clone. Features:
- Top banner with early access CTA
- Featured video carousel strip
- Generate block + tool grid
- Project Memory promo banner
- Tool pills + Top Choice grid
- Masonry gallery sections

### `onboarding.html` — Sign-Up Flow
5-step Higgsfield-style onboarding:
1. Create account (Google / GitHub / email)
2. Dev type (Solo / Studio / Student / Enterprise)
3. Game genre (multi-select up to 2)
4. Art Style Lock picker (6 presets)
5. Plan selector (Indie $0 / Studio $49 / Team $149)
6. Success screen with personalised summary

### `generate-art.html` — AI Art Workspace
Higgsfield `/ai/image` clone. Features:
- 3-column layout (sidebar / canvas / panel)
- Model switcher (Style Lock Pro, Scenario, Midjourney, Pixel Art, Flux)
- 1/2/4 output count toggle
- Live generation progress animation
- Style presets, aspect ratios, sliders
- Reference image upload, negative prompt

### `world-builder.html` — World Builder Canvas
Node-based game world editor. Features:
- 8 node types (Biome, Character, Faction, Quest, Item, Event, Lore, Audio)
- Draggable nodes with live bezier connections
- Right-click properties panel
- Mini-map overview
- Auto layout
- ✦ Generate All — staggered generation across all nodes

---

## 🧭 Roadmap

- [ ] Real game art images in gallery carousels
- [ ] Pricing page
- [ ] NPC Brain workspace
- [ ] Trailer Generator workspace
- [ ] Supabase integration for Project Memory
- [ ] fal.ai model routing
- [ ] Stripe billing

---

## 🏗️ Tech Stack (Planned)

| Layer | Tech |
|---|---|
| Frontend | Next.js + Tailwind |
| Auth | Clerk |
| Project Memory | Supabase |
| Model routing | fal.ai |
| Billing | Stripe |
| 3D assets | Meshy |
| NPC dialogue | Inworld / Convai |
| Voice | ElevenLabs |
| Music | AIVA |

---

## 💡 Core Concept

**Project Memory** is the central differentiator — a locked context object that every tool reads from. Once you define your art style, characters, and world lore, every AI generation across every tool automatically stays consistent with your game.

```
Project Memory = {
  artStyle: "Dark painterly fantasy",
  palette: ["#1a0f2e", "#2e1a3e", "#FE9E17"],
  characters: ["Kira (dark elf rogue)", "Valdris (fallen paladin)"],
  loreRules: ["Magic is forbidden", "Sky is always red at dusk"],
  worldName: "Aetheris"
}
```

---

*Built with Claude Design — Anthropic*
