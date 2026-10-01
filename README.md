# RUNNERS — V2 Front-End

A polished static front-end for the RUNNERS / Injective / RunUp concept.

## GitHub Pages

Extract the ZIP first. Upload the **contents** of this folder to the root of the GitHub repository — not the ZIP itself.

The repository root must contain:

```text
index.html
css/style.css
js/app.js
assets/
README.md
```

Then GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Included

- cinematic boot screen
- responsive market-city hero
- animated skyline + runner
- market ticker
- interactive city map and route nodes
- playable local/test run mode
- timer, distance, steps and energy
- optional browser GPS request
- nearby chest UI
- simulated market chart/feed clearly labeled as simulated
- daily quest board with XP
- runner profile / leveling
- RunUp launch terminal
- wallet-safe demo modal

## Production integrations

This is intentionally a static public build. To make it genuinely on-chain, wire in:
- Injective wallet connection
- real Injective market/indexer data
- real Runner identity/profile
- real quests/XP storage
- real RunUp launch URL/API
- real token/contract data

Never put seed phrases or private keys in frontend code.
