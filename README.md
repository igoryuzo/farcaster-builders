# Hello World Farcaster Mini App

A simple Hello World mini app built with Next.js for the Farcaster ecosystem.

## Features

- Simple Hello World display with Farcaster branding colors
- Integration with Farcaster Frame SDK
- Ready for embedding in Warpcast

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [https://farcaster-builders.vercel.app](https://farcaster-builders.vercel.app) in your browser to see the result.

## Deployment

Before deploying to production:

1. Update the domain URLs in the following files from `https://farcaster-builders.vercel.app` to your production domain:
   - `src/app/layout.tsx` - Update the domain URLs in frameMetadata
   - `public/.well-known/farcaster.json` - Update the image URLs

2. Add your images to the `public/images` folder:
   - The main preview image is now `/growth.gif` - This will be displayed when the mini app URL is shared
   - Add `splash.png` - This will be displayed as the splash screen when the mini app is loading

3. Build the production application:

```bash
yarn build
```

4. Deploy the application to your hosting provider.

## Farcaster Integration

This mini app integrates with the Farcaster ecosystem using the `@farcaster/frame-sdk` package. The integration includes:

- Meta tags for proper rendering in Warpcast
- SDK integration for loading the app
- Proper color scheme and branding
