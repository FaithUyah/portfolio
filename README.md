# Faith Uyah Portfolio

A responsive, editorial portfolio for Faith Uyah, positioned as a **content creator, UGC specialist, virtual assistant, WordPress web designer, and brand-video creator**.

The project uses plain HTML, CSS, and JavaScript. It has no build step and no npm dependency.

## Run locally

If Node.js is installed:

```bash
node server.js
```

Open `http://localhost:3000`.

You can also open `index.html` directly in a browser for the visual portfolio, but the local server is recommended for testing the contact form and external assets.

## Customize before launch

All owner-specific values live in `config.js`:

- `owner.email` — the inbox that should receive enquiries.
- `owner.whatsappNumber` — WhatsApp number in international format, without `+`, spaces, or punctuation.
- `owner.whatsappMessage` — the pre-filled WhatsApp message.
- `owner.role`, `owner.location`, and `owner.availability` — the visible profile details.
- `social` — Instagram, LinkedIn, and Behance URLs.
- `services` — the four service cards: Content & UGC, Virtual assistance, WordPress websites, and Brand videos.
- `projects` — project titles, descriptions, categories, image URLs, metadata, and links.
- `contact.formSubmitEndpoint` — set this to `https://formsubmit.co/ajax/YOUR-EMAIL` using the same email as `owner.email`.

## Enable the free email form

This static form uses [FormSubmit](https://formsubmit.co/) and does not require a server or exposed API key.

1. Replace `faith@example.com` in `config.js` with the real owner email.
2. Update `contact.formSubmitEndpoint` to `https://formsubmit.co/ajax/real-owner-email@example.com`.
3. Submit the form once from the live site.
4. Click the activation link FormSubmit sends to the owner inbox.
5. Submit again to confirm delivery.

Until the placeholder email is replaced, the form intentionally shows a configuration message rather than sending anywhere.

## Host the ZIP yourself

1. Download and unzip the project.
2. Upload the contents of the unzipped folder to your hosting provider's public web directory, such as `public_html`, `www`, or `htdocs`.
3. Make sure `index.html`, `config.js`, `script.js`, and `styles.css` are in the same directory.
4. Update `config.js` with Faith's real email, WhatsApp number, social links, and project details.
5. For static hosting such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages, deploy the folder as-is; no build command is needed.
6. For a Node-enabled server, run `node server.js` and point the domain to port 3000, or set the `PORT` environment variable to the port your host provides.

## Notes

Remote project images currently use Unsplash URLs for easy replacement. Replace them with owned image URLs or uploaded project assets for production. The floating WhatsApp pill stays visible across the site and opens WhatsApp in a new tab. The site is intentionally dependency-free so it can be hosted on almost any static host.
# portfolio
