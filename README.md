# RUNNERS — Final Front-End

This package is the polished static front-end for the RUNNERS / Injective / RunUp concept.

## GitHub Pages deployment

1. Extract this ZIP.
2. Open the extracted `runners-final` folder.
3. Upload **all files and folders inside it** to the root of your GitHub repository.
4. Your repository root must look like:

```
index.html
css/style.css
js/app.js
assets/
README.md
```

5. GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
6. Keep your custom domain in Pages if you already configured it.

## Important

This version is intentionally safe as a static public demo:
- no seed phrase
- no private-key handling
- no fake "live on-chain" claims
- market values are visual/demo values
- wallet button is the production integration point
- RunUp terminal is the production launch integration point

## Production integration

To make the launch actually live, the next layer is:
- Injective wallet connection
- real Injective market data
- real wallet address/profile
- real RunUp launch URL/API flow
- real contract/token data
- optional indexed runner XP / missions

Do not put private keys or seed phrases into front-end code.
