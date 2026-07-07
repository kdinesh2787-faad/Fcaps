# FCAPS Website - Vercel Deployment Guide

## ✅ Project Status

This project has been **fully corrected and tested** for Vercel deployment:

- ✅ All Manus-specific dependencies removed
- ✅ Converted to npm (from pnpm)
- ✅ `package-lock.json` generated and verified
- ✅ `npm install` tested successfully
- ✅ `npm run build` tested successfully
- ✅ Ready for production deployment

## 🚀 Deploy in 5 Steps

### Step 1: Get Web3Forms Access Key (2 min)

1. Go to https://web3forms.com
2. Sign up (free, no credit card required)
3. Create a new form
4. Copy your **Access Key**

### Step 2: Update Form Files (2 min)

Update these two files with your Web3Forms access key:

**File 1**: `client/src/components/InquiryModal.tsx`
- Line ~51: Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

**File 2**: `client/src/pages/Contact.tsx`
- Line ~57: Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

### Step 3: Push to GitHub (1 min)

```bash
git add .
git commit -m "FCAPS website ready for Vercel"
git push origin main
```

### Step 4: Create Vercel Project (1 min)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Click "Deploy"

### Step 5: Verify Deployment (1 min)

1. Wait for deployment to complete
2. Visit your Vercel URL
3. Test the inquiry form
4. Check your email for submission

**Total time: ~7 minutes** ⏱️

## 📋 What's Included

This project contains:

- **Complete React website** with all pages and components
- **Responsive design** (mobile, tablet, desktop)
- **Professional branding** (red/navy color scheme)
- **Contact forms** with Web3Forms integration
- **Optimized build** for Vercel
- **Zero backend** - fully static
- **Production-ready** dependencies

## 🔍 Verification

Before deploying, verify locally:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Expected output:
# ✓ built in X.XXs
# ../dist/index.html
# ../dist/assets/index-XXXXX.css
# ../dist/assets/index-XXXXX.js
```

If both commands succeed, you're ready to deploy!

## 💰 Cost

- **Vercel**: FREE (for static sites)
- **Web3Forms**: FREE (up to 250 submissions/month)
- **Custom Domain**: $10-15/year (optional)
- **Total**: $0-15/year

## 🌐 Custom Domain (Optional)

After deployment, add a custom domain:

1. Vercel Dashboard → Settings → Domains
2. Add your domain
3. Follow DNS instructions

## 📧 Email Recipients

Forms send to:
- **Inquiry Modal**: `shiksha@fcaps.in`
- **Contact Form**: `hello@fcaps.in`

Change these in the form files if needed.

## 🚨 Troubleshooting

### Build fails on Vercel
- Check Vercel build logs
- Verify `npm install` works locally
- Verify `npm run build` works locally

### Forms not sending
- Verify Web3Forms access key
- Check email addresses
- Test with different email

### Site not loading
- Check Vercel deployment status
- Clear browser cache
- Try incognito mode

## 📞 Support

- **Vercel**: https://vercel.com/support
- **Web3Forms**: https://web3forms.com/contact
- **GitHub**: Create an issue

## ✨ You're All Set!

Your FCAPS website is production-ready. Deploy with confidence! 🚀
