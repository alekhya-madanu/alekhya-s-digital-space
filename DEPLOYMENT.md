# Deployment Guide for alekhya.dev

This guide will help you deploy your website to `alekhya.dev`.

## Prerequisites

- Your code pushed to a GitHub repository
- Access to your domain registrar (where you bought alekhya.dev)

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Install Dependencies & Test Build Locally

```bash
npm install
npm run build
```

This will create a `dist` folder with your production build.

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (recommended)

2. **Import Your Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy" (no configuration needed - `vercel.json` is already set up)

3. **Your site will be live** at a URL like `your-project.vercel.app`

### Step 3: Connect Your Domain (alekhya.dev)

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click "Add Domain"
   - Enter `alekhya.dev` and click "Add"
   - Also add `www.alekhya.dev` if you want www support

2. **Update DNS Records at Your Domain Registrar:**
   
   Vercel will show you the DNS records to add. You have two options:

   **Option A: Use A Records (Recommended for root domain)**
   - Add an A record:
     - Name: `@` (or leave blank, depending on your registrar)
     - Value: `76.76.21.21` (Vercel's IP - check dashboard for current IPs)
   - Add a CNAME record for www:
     - Name: `www`
     - Value: `cname.vercel-dns.com`

   **Option B: Use CNAME (Simpler)**
   - Add a CNAME record:
     - Name: `@` (or root domain)
     - Value: `cname.vercel-dns.com`
   - Add another CNAME:
     - Name: `www`
     - Value: `cname.vercel-dns.com`

3. **Wait for DNS Propagation**
   - DNS changes can take 5-60 minutes to propagate
   - Vercel will automatically provision SSL certificates once DNS is verified
   - You'll see a green checkmark when everything is ready

4. **Verify**
   - Visit `alekhya.dev` and `www.alekhya.dev` - both should work!

## Option 2: Deploy to Netlify

### Step 1: Deploy

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 2: Connect Domain

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Enter `alekhya.dev`
4. Follow Netlify's DNS instructions to update your domain records

## Option 3: Deploy to Cloudflare Pages (Free & Fast)

### Step 1: Deploy

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages**
2. Click "Create a project" → "Connect to Git"
3. Select your repository
4. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

### Step 2: Connect Domain

1. Go to your project → **Custom domains**
2. Click "Set up a custom domain"
3. Enter `alekhya.dev`
4. Cloudflare will automatically configure DNS if your domain is on Cloudflare

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `npm install`
- Check that `npm run build` works locally
- Review build logs in your hosting platform

### Domain Not Working
- Wait 24-48 hours for DNS propagation (usually much faster)
- Verify DNS records are correct using `dig alekhya.dev` or [dnschecker.org](https://dnschecker.org)
- Check your domain registrar's DNS settings

### 404 Errors on Routes
- The `vercel.json` file includes rewrite rules for React Router
- For Netlify, create a `_redirects` file in `public/` with: `/* /index.html 200`
- For Cloudflare Pages, routing should work automatically with Vite preset

## Continuous Deployment

Once set up, every push to your main branch will automatically deploy! No manual steps needed.

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages


