# Prediction Markets — Avalanche BD Portal

Internal portal for the Avalanche Prediction Market BD team. Tracks the ecosystem, migration targets, strategy docs, and resources.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub (private repo recommended)
2. Go to [vercel.com/ava-labs](https://vercel.com/ava-labs)
3. Click "Add New Project" → Import the GitHub repo
4. Framework preset: **Next.js** (auto-detected)
5. Deploy

To add to the existing BD portal as a sub-path, configure the domain in Vercel project settings.

## Project Structure

```
pm-portal/
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── globals.css         # Design system (dark theme, Avalanche branding)
│   ├── page.tsx            # Home — Ecosystem Map overview
│   ├── targets/page.tsx    # Migration Targets dashboard (interactive)
│   ├── landscape/page.tsx  # Competitive Landscape (placeholder)
│   ├── strategy/page.tsx   # Vol. 01 Q2 2026 (placeholder)
│   ├── l1-pitch/page.tsx   # L1 vs C-Chain Pitch (placeholder)
│   ├── ownership/page.tsx  # Ownership Playbook (placeholder)
│   ├── deals/page.tsx      # Deal Templates (placeholder)
│   ├── primer/page.tsx     # PM Primer (placeholder)
│   └── okrs/page.tsx       # OKR Scoreboard (placeholder)
├── components/
│   ├── Sidebar.tsx         # Left navigation (matches BD portal)
│   └── UI.tsx              # Reusable components (cards, badges, bars)
├── lib/
│   └── data.ts             # All ecosystem + target data
└── public/
```

## Pages

| Route | Status | Description |
|-------|--------|-------------|
| `/` | ✅ Live | Ecosystem overview — products, stats, priority targets |
| `/targets` | ✅ Live | Full migration targets dashboard with filters |
| `/landscape` | 🔜 Placeholder | Competitive landscape and market share |
| `/strategy` | 🔜 Placeholder | Vol. 01 Q2 2026 strategy doc |
| `/l1-pitch` | 🔜 Placeholder | L1 vs C-Chain pitch guide |
| `/ownership` | 🔜 Placeholder | dApp layer ownership playbook |
| `/deals` | 🔜 Placeholder | Deal template library |
| `/primer` | 🔜 Placeholder | PM category primer |
| `/okrs` | 🔜 Placeholder | OKR scoreboard |

## Updating Data

All ecosystem products and migration targets live in `lib/data.ts`. Update that file to refresh the dashboard. No database required.

## Classification

**INTERNAL — DO NOT DISTRIBUTE**

This portal contains confidential deal detail and strategy. Access should be restricted to the Avalanche Ecosystem Growth team.
