---
description: How to deploy the Pivotal Voice application to Vercel
---

# Deploying to Vercel

Follow these steps to deploy your Next.js application to Vercel with full Supabase functionality.

## 1. Prerequisites
- A GitHub repository containing the latest project code.
- A Supabase project with the schema applied and data seeded.
- A Vercel account linked to your GitHub.

## 2. Initial Vercel Setup
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your **PV App Antigravity** repository.

## 3. Environment Variables (Required)
Before clicking "Deploy", expand the **Environment Variables** section. You need two keys from your Supabase Project Settings (> API):

1.  **NEXT_PUBLIC_SUPABASE_URL**
    *   **Where to find**: Supabase Project Settings > API > Project URL.
    *   **Purpose**: Tells the app where your database is hosted.
2.  **NEXT_PUBLIC_SUPABASE_ANON_KEY**
    *   **Where to find**: Supabase Project Settings > API > Project API keys > `anon` (public).
    *   **Purpose**: Allows client-side authentication and data fetching.

> [!IMPORTANT]
> Ensure both keys start with `NEXT_PUBLIC_` or Next.js will not expose them to the browser, causing the Supabase client to fail.

## 4. Build and Deploy
1. Ensure the Framework Preset is set to **Next.js**.
2. Keep the Build Command as `next build` (default).
3. Click **Deploy**.

## 5. Post-Deployment Verification
1. Once deployed, navigate to the provided `.vercel.app` URL.
2. Check the **Forum** page to ensure categories are loading from Supabase.
3. Test the **Login/Register** flow to verify Auth state synchronization.

## 6. Continuous Integration
Any subsequent pushes to the `main` branch on GitHub will automatically trigger a new production build on Vercel.

---
// turbo
### Automated Connectivity Check
Run this command to verify local build compatibility before pushing:
```bash
npm run build
```
