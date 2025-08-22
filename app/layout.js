import Container from "@/components/layout/Container";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Hammad Hashmi",
  description: "Hammad Hashmi's Portfolio",
  // Open Graph Metadata
  openGraph: {
    title: "Hammad Hashmi",
    description: "Welcome to my portfolio!",
    url: "https://github.com/Hammadh7",
    siteName: "Hammad Hashmi",
    images: [
      {
        url: "https://github.com/Hammadh7.png",
        width: 800,
        height: 800,
        alt: "Hammad Hashmi's GitHub Profile Picture",
      },
    ],
    type: "website",
  },
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Hammad Hashmi",
    description: "Hammad Hashmi's Portfolio",
    image: "https://github.com/Hammadh7.png",
    url: "https://x.com/hammad_h7",
  },
  // LinkedIn Metadata
  linkedin: {
    title: "Hammad Hashmi",
    description: "Welcome to my portfolio on LinkedIn!",
    url: "https://www.linkedin.com/in/hammad-hashmi-b278a625a/",
    image: "https://github.com/Hammadh7.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content="@Hammadh7" />

        {/* LinkedIn Open Graph meta tags */}
        <meta property="og:title" content={metadata.linkedin.title} />
        <meta
          property="og:description"
          content={metadata.linkedin.description}
        />
        <meta property="og:image" content={metadata.linkedin.image} />
        <meta property="og:url" content={metadata.linkedin.url} />
        <meta property="og:type" content="profile" />

        {/* Favicon */}
        <link rel="icon" href="https://github.com/Hammadh7.png" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://github.com/Hammadh7.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://github.com/Hammadh7.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="https://github.com/Hammadh7.png"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          href="https://github.com/Hammadh7.png"
          sizes="180x180"
        />

        {/* Webpage performance and security */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' https://vercel.com; object-src 'none';"
        />

        {/* Preload fonts for better performance */}
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Link the manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-neutral-200">
        <Container>{children}</Container>

        {/* Lazy-load analytics for performance */}
        <Analytics lazy />
        <SpeedInsights lazy />
      </body>
    </html>
  );
}
