# Personal Webite

A small personal website built with React and Vite that doubles as a mini scavenger hunt. Visitors land on a playful profile page, discover hints, unlock a password screen, and eventually reach a hidden “secret” page.

## Tech stack

- React (SPA)
- React Router (`react-router-dom`)
- Vite
- CSS modules for styling (`App.css`, `Password.css`, `Secret.css`, `index.css`)

---

## Running the project locally

1. Clone the repo:

   ```bash
   git clone https://github.com/AmericanSpirit38/p-w-cool.git
   cd p-w-cool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL printed in the terminal (usually `http://localhost:5173/p-w-cool/` for Vite).

---

## Deploying to GitHub Pages

This project is configured to deploy to GitHub Pages at `https://americanspirit38.github.io/p-w-cool/`.

### One-time Setup

1. Ensure GitHub Pages is enabled for your repository:
   - Go to repository Settings → Pages
   - Under "Build and deployment", set Source to "Deploy from a branch"
   - Select the `gh-pages` branch and `/ (root)` folder
   - Click Save

### Deploying Updates

To deploy your changes to GitHub Pages, run:

```bash
npm run deploy
```

This will:
1. Build the production version (`npm run build`)
2. Push the `dist` folder contents to the `gh-pages` branch
3. Automatically trigger GitHub Pages to update your live site

The site should be live at `https://americanspirit38.github.io/p-w-cool/` within a few minutes.

---

## How to play (for visitors)

1. Open the site and land on the home page.
2. Click the lock to reach the password page.
3. Figure out the password (currently `"Bratislava"`) and submit it.
4. Enjoy the animated secret page as a reward.


## Author

- Personal site & scavenger hunt by [AmericanSpirit38](https://github.com/AmericanSpirit38)
