# Deploying Illuminator-viz to GitHub Pages

This guide explains how to deploy the static HTML version of illuminator-viz to GitHub Pages.

## Quick Deployment

The project has been converted from React to a single static HTML file that can be directly hosted on GitHub Pages.

### Option 1: Deploy from Main Branch (Recommended)

1. **Push your changes to GitHub:**
   ```bash
   git add index.html
   git commit -m "Convert to static HTML for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose branch: **main** and folder: **/ (root)**
   - Click **Save**

3. **Your site will be live at:**
   ```
   https://<your-username>.github.io/illuminator-viz/
   ```

### Option 2: Deploy from gh-pages Branch

If you prefer to use a `gh-pages` branch:

1. **Create and push gh-pages branch:**
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   cp index.html .
   git add index.html
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   git checkout main
   ```

2. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Choose branch: **gh-pages** and folder: **/ (root)**
   - Click **Save**

## Important Notes

### Favicon Path
The favicon path in `index.html` is currently set to:
```html
<link rel="icon" type="image/x-icon" href="/illuminator-viz/public/favicon.ico">
```

This assumes your GitHub Pages site will be at `https://<username>.github.io/illuminator-viz/`. If your repository name is different, update the path accordingly.

Alternatively, you can:
1. Move the favicon to the root directory
2. Update the path to: `href="public/favicon.ico"` or `href="favicon.ico"`

### Custom Domain
If you're using a custom domain, you may need to adjust the favicon path to be root-relative:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

## What Was Converted

✅ **All React components** → Single HTML file
✅ **Tailwind CSS** → CDN version with custom config
✅ **Graph background animation** → Vanilla JavaScript canvas animation
✅ **Lucide icons** → CDN version
✅ **All sections and content** → Preserved exactly
✅ **Responsive design** → Fully maintained
✅ **Animations and interactions** → All preserved

## Features Preserved

- Animated graph background with connecting nodes
- Responsive navigation with mobile menu
- All content sections (Hero, What It Is, Performance, Demo, Get Started)
- Smooth scrolling navigation
- Hover effects and transitions
- Dark theme with electric blue accents

## Testing Locally

You can test the site locally by simply opening `index.html` in your browser:

```bash
open index.html
```

Or use a local server:

```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## Troubleshooting

### Site not loading?
- Make sure GitHub Pages is enabled in repository settings
- Wait 1-2 minutes for deployment to complete
- Check the GitHub Actions tab for any build errors

### Styles not loading?
- Check that you have internet connectivity (Tailwind and Lucide are loaded from CDN)
- Verify the Tailwind CDN script is present in the `<head>`

### Icons not showing?
- Ensure the Lucide script is loaded
- Check browser console for any errors

## Updating Content

To make changes:
1. Edit `index.html` directly
2. Test locally by opening in browser
3. Commit and push changes
4. GitHub Pages will automatically redeploy

## File Structure

```
illuminator-viz/
├── index.html          # Main HTML file (deploy this)
├── public/
│   └── favicon.ico     # Favicon
├── DEPLOYMENT.md       # This file
└── ...                 # Original React files (can be kept or removed)
```

You can optionally remove the React-specific files if you no longer need them:
- `src/` directory
- `package.json`, `package-lock.json`
- `vite.config.ts`, `tailwind.config.ts`, etc.
- `node_modules/`

But keeping them doesn't hurt - GitHub Pages will only serve the `index.html` file.

## Customization

All styles are defined in the `<style>` tag and Tailwind configuration in the `<head>`. You can easily customize:

- **Colors**: Modify the HSL values in the Tailwind config
- **Animations**: Edit the `@keyframes` in the style tag
- **Content**: Directly edit the HTML
- **Layout**: Adjust Tailwind classes

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all CDN links are accessible
3. Test locally first before deploying