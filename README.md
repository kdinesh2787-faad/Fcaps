# FCAPS Website - Vercel Deployment

A professional, fully static React website for Faad Capital Partners, optimized for free deployment on Vercel with serverless form handling via Web3Forms.

## ✅ What's Fixed

This project has been corrected for Vercel deployment:

- ✅ Removed all Manus-specific dependencies (`vite-plugin-manus-runtime`, `@builder.io/vite-plugin-jsx-loc`)
- ✅ Converted from pnpm to npm
- ✅ Generated valid `package-lock.json`
- ✅ Updated `vite.config.ts` for Vercel compatibility
- ✅ Tested locally with `npm install` and `npm run build`
- ✅ Created `vercel.json` for optimal Vercel configuration
- ✅ All dependencies are production-ready

## 🚀 Quick Start

### Prerequisites
- GitHub account
- Vercel account (free at https://vercel.com)
- Web3Forms account (free at https://web3forms.com) - for form submissions

### Step 1: Set Up Web3Forms (5 minutes)

1. Go to https://web3forms.com
2. Sign up for a free account
3. Create a new form and copy your **Access Key**
4. Update these two files with your access key:
   - `client/src/components/InquiryModal.tsx` (line ~51)
   - `client/src/pages/Contact.tsx` (line ~57)

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key.

### Step 2: Deploy to Vercel (3 minutes)

**Option A: Via Vercel Dashboard (Recommended)**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "FCAPS website ready for Vercel"
   git push origin main
   ```

2. Go to https://vercel.com/new

3. Click "Import Git Repository"

4. Select your GitHub repository

5. Click "Deploy"

6. Your site is now live! 🎉

**Option B: Via Vercel CLI**

```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
fcaps-vercel-fixed/
├── client/
│   ├── src/
│   │   ├── pages/           # Page components (Home, Services, About, Contact)
│   │   ├── components/      # Reusable UI components
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Static assets
│   └── index.html           # HTML template
├── dist/                    # Build output (generated)
├── node_modules/            # Dependencies (generated)
├── package.json             # Project dependencies
├── package-lock.json        # Dependency lock file
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel configuration
└── README.md                # This file
```

## 🔧 Build & Development

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm preview

# Output is in `dist/` folder
```

## 📧 Email Recipients

Forms send emails to:
- **Inquiry Modal**: `shiksha@fcaps.in`
- **Contact Form**: `hello@fcaps.in`

Update these email addresses in the same files if needed.

## 🌐 Custom Domain (Optional)

After deploying to Vercel:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS instructions

## 💰 Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | FREE | For static sites |
| Web3Forms | FREE | Up to 250 submissions/month |
| Custom Domain | $10-15/year | Optional |
| **Total** | **$0-15/year** | vs. $50-100/month traditional hosting |

## 🔒 Security

- ✅ No backend server to hack
- ✅ No database to breach
- ✅ HTTPS by default
- ✅ DDoS protection included
- ✅ Web3Forms uses industry-standard security

## 📊 Performance

Expected metrics on Vercel:
- **Build Time**: < 2 minutes
- **Page Load**: < 1 second
- **Lighthouse Score**: 90+
- **Uptime**: 99.99%

## 🧪 Verify Installation

Before deploying, verify everything works locally:

```bash
# Install dependencies
npm install

# Run build
npm run build

# Expected output:
# ✓ built in X.XXs
# ../dist/index.html
# ../dist/assets/index-XXXXX.css
# ../dist/assets/index-XXXXX.js
```

If both commands succeed without errors, your project is ready for Vercel!

## 🚨 Troubleshooting

### npm install fails
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Build fails locally
- Check Node.js version: `node --version` (should be 16+)
- Verify all files are present
- Check for TypeScript errors: `npm run check`

### Build succeeds but site doesn't work on Vercel
- Check Vercel build logs in dashboard
- Verify `vercel.json` is present
- Ensure `dist/` folder contains `index.html`

### Forms not sending emails
- Verify Web3Forms access key is correct
- Check email addresses are correct
- Test with a different email address
- Check Web3Forms dashboard for error logs

## 📚 Documentation

- **Vercel Docs**: https://vercel.com/docs
- **Web3Forms Docs**: https://web3forms.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com

## ✅ Deployment Checklist

Before deploying to Vercel:

- [ ] Web3Forms account created
- [ ] Access keys updated in both form files
- [ ] Email addresses verified
- [ ] `npm install` runs successfully
- [ ] `npm run build` completes without errors
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Deployment successful
- [ ] Forms tested on live site
- [ ] Custom domain added (optional)

## 🎯 Next Steps

1. ✅ Set up Web3Forms account
2. ✅ Update form access keys
3. ✅ Push to GitHub
4. ✅ Deploy to Vercel
5. ✅ Test forms
6. ✅ Add custom domain (optional)

## 📞 Support

- **Vercel Support**: https://vercel.com/support
- **Web3Forms Support**: https://web3forms.com/contact
- **GitHub Issues**: Create an issue in your repository

---

**Your FCAPS website is production-ready and optimized for Vercel deployment!** 🚀
