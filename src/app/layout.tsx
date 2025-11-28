import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cognitiflow | AI Services & Workflow Automation",
    template: "%s | Cognitiflow"
  },
  description: "Transform your business with intelligent AI solutions. Custom AI consulting, workflow automation, and smart business tools for small and medium businesses.",
  keywords: ["AI consulting", "workflow automation", "business AI", "custom AI solutions", "small business AI", "AI for small business", "process automation", "intelligent automation"],
  authors: [{ name: "Cognitiflow" }],
  creator: "Cognitiflow",
  publisher: "Cognitiflow",
  metadataBase: new URL("https://cognitiflow.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cognitiflow | AI Services & Workflow Automation",
    description: "Transform your business with intelligent AI solutions. Custom AI consulting, workflow automation, and smart business tools.",
    url: "https://cognitiflow.ai",
    siteName: "Cognitiflow",
    locale: "en_US",
    type: "website",
    // OG image generated dynamically via opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitiflow | AI Services & Workflow Automation",
    description: "Transform your business with intelligent AI solutions.",
    // Twitter image uses the same OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons are generated dynamically via icon.tsx and apple-icon.tsx
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cognitiflow',
  url: 'https://cognitiflow.ai',
  logo: 'https://cognitiflow.ai/icon',
  description: 'Transform your business with intelligent AI solutions. Custom AI consulting, workflow automation, and smart business tools.',
  founders: [
    {
      '@type': 'Person',
      name: 'Jacob Rubinstein',
    },
    {
      '@type': 'Person',
      name: 'Elie Schulman',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@cognitiflow.ai',
    contactType: 'customer service',
  },
  sameAs: [],
  offers: {
    '@type': 'AggregateOffer',
    offers: [
      {
        '@type': 'Offer',
        name: 'AI Strategy Consulting',
        description: 'Expert guidance on implementing AI in your business',
      },
      {
        '@type': 'Offer',
        name: 'Workflow Automation',
        description: 'Streamline operations with intelligent automation',
      },
      {
        '@type': 'Offer',
        name: 'Custom AI Solutions',
        description: 'Bespoke AI tools built for your specific needs',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
