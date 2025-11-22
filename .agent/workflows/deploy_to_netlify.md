---
description: How to deploy the application to Netlify
---

1. **Prepare the Project**:
   - Ensure `netlify.toml` exists in the root directory with build settings.
   - Ensure `public/_redirects` exists to handle React Router client-side routing.
   - Commit and push all changes to GitHub.

2. **Deploy via Netlify Dashboard (Recommended)**:
   - Go to [Netlify](https://app.netlify.com/).
   - Click "Add new site" > "Import an existing project".
   - Connect to GitHub and select the `verdant-vibes-plant-shop` repository.
   - Netlify will detect the settings from `netlify.toml` automatically:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site".

3. **Deploy via Netlify CLI (Manual)**:
   - Install Netlify CLI: `npm install netlify-cli -g`
   - Run `netlify login` to authenticate.
   - Run `netlify init` to link the site.
   - Run `netlify deploy --prod` to build and deploy.

4. **Verify Deployment**:
   - Once deployed, open the provided Netlify URL.
   - Test navigation (e.g., go to `/shop` and refresh) to ensure the `_redirects` rule is working.
