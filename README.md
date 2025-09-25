# Krea AI Clone

A Next.js-based clone of the Krea AI platform, featuring AI-powered image generation with various models including WAN 2.2, FLUX series, and more. This application provides an interface for generating images using advanced AI models, with support for style transfer, portrait enhancement, landscape generation, and abstract art creation.


## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Theme**: next-themes
- **Analytics**: Vercel Analytics

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/krea-ai-clone.git
   cd krea-ai-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Navigate through the featured AI models in the hero section.
- Use the generate section to create images based on prompts.
- Browse the gallery to view generated images.
- Switch between light and dark themes using the theme switcher.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
krea-ai-clone/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── header.tsx        # Site header
│   ├── hero-section.tsx  # Hero section with model showcases
│   ├── generate-section.tsx # Image generation interface
│   ├── gallery.tsx       # Image gallery
│   └── footer.tsx        # Site footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── images/          # Sample images
└── styles/              # Global styles
```

## License

This project is licensed under the MIT License

## Acknowledgments

- Inspired by the original Krea AI platform
- UI components from shadcn/ui