# Mary Ogunleye — Digital Business Card

A production-ready, mobile-first digital business card for Mary Ogunleye, Customer Care Manager at Five Star Logistics Ltd. Built with Next.js, TypeScript, Tailwind CSS and accessible native web interactions.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Edit contact details

All verified client and brand data lives in `src/config/profile.ts`. Update the phone, title, facility, address or logo path there. The page and downloadable vCard both use this configuration.

### Update the email address

The confirmed business email is defined once as the `email` value in `src/config/profile.ts`. The interface and downloadable vCard both use this value.

## Company logo

The current `public/five-star-logistics-logo.png` is a cleaned web derivative of the low-resolution logo supplied with the project brief. Replace it with an official high-resolution Five Star Logistics Ltd. logo using the same filename when one is available. Keep the transparent horizontal format.

## Permanent production URL and QR codes

Vercel automatically provides `VERCEL_PROJECT_PRODUCTION_URL`, which the app uses for canonical metadata, sharing and the initial QR destination. In the browser, the QR component resolves to the active production origin.

For a permanent custom domain, copy `.env.example` to `.env.local` during local work and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Add the same variable in Vercel and redeploy. The downloadable QR code is generated in the visitor's browser from the resulting public URL; no separate QR build step is required.

## Vercel deployment

1. Import the existing GitHub repository into a new, dedicated Vercel project.
2. Keep the framework preset as **Next.js**.
3. Add `NEXT_PUBLIC_SITE_URL` only when a permanent custom domain is known.
4. Deploy the `main` branch.
5. Confirm Git integration is enabled so future pushes to `main` deploy automatically.

With the Vercel CLI authenticated, the equivalent commands are:

```bash
npx vercel link
npx vercel --prod
```

Do not link this repository to an unrelated existing Vercel project.
