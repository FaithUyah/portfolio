# Faith Uyah Portfolio

A responsive, editorial portfolio for Faith Uyah, positioned as a **content creator, UGC specialist, virtual assistant, WordPress web designer, social media support partner, and brand-video creator**.

The project uses plain HTML, CSS, and JavaScript. It has no build step and no npm dependency.

## Verified owner details included

The current configuration uses **Uyo, Akwa Ibom State, Nigeria · working globally**, **faithuyah2002@gmail.com**, and WhatsApp **+234 812 921 9844**. Confirm these details with the owner before final publication.

## Run locally

If Node.js is installed:

```bash
node server.js
```

Open `http://localhost:3000`.

You can also open `index.html` directly in a browser for the visual portfolio, but the local server is recommended for testing the contact form and external assets.

## Customize before launch

All owner-specific values live in `config.js`. Update `owner.email`, `owner.whatsappNumber`, `owner.whatsappMessage`, `owner.location`, and the social URLs if needed. The `services` and `projects` arrays control the visible service cards and selected work.

The corrected package removes the duplicate project entries currently visible on the public GitHub Pages version and keeps six distinct work samples. Two real YouTube projects use visible thumbnails that link out to the videos, while concept and sample work is labeled honestly. Replace any concept or sample with final client work, screenshots, live links, and accurate project descriptions before presenting it as client work.

## Enable the free email form

This static form uses [FormSubmit](https://formsubmit.co/) and does not require a server or exposed API key. The current endpoint is configured for `faithuyah2002@gmail.com`.

1. Confirm that the owner email in `config.js` is correct.
2. Submit the form once from the live site.
3. Click the activation link FormSubmit sends to the owner inbox.
4. Submit again to confirm delivery.

The form includes a service selector, optional budget range, project message, and direct WhatsApp alternative. The website should be tested on both desktop and mobile after deployment. A successful browser response is not a substitute for confirming that the email arrived in the inbox.

## Host the ZIP yourself

1. Download and unzip the project.
2. Upload the contents of the unzipped folder to your hosting provider's public web directory, such as `public_html`, `www`, or `htdocs`.
3. Make sure `index.html`, `config.js`, `script.js`, and `styles.css` are in the same directory.
4. For static hosting such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages, deploy the folder as-is; no build command is needed.
5. For a Node-enabled server, run `node server.js` and point the domain to port 3000, or set the `PORT` environment variable to the port your host provides.

For the existing GitHub repository, replace the repository's `index.html`, `config.js`, `script.js`, `styles.css`, `README.md`, and `assets/` contents with the matching files from this package, then commit and push to the `main` branch. GitHub Pages should rebuild from the updated branch. The current public repository contains an older configuration with duplicate project records, so replacing both `config.js` and `script.js` is important.

## Notes

Remote project images currently use Unsplash URLs for easy replacement. Replace them with owned image URLs, screenshots, video thumbnails, or uploaded project assets for production. The floating WhatsApp pill stays visible across the site and opens WhatsApp in a new tab. The site is intentionally dependency-free so it can be hosted on almost any static host.
