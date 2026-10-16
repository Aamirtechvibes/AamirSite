import type { Metadata, Viewport } from "next";

import "@/app/globals.css";

import { HomepageExecutionLayer } from "@/components/home/homepage-execution-layer";
import { AnalyticsProvider } from "@/components/providers/analytics-provider";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteHeader } from "@/components/ui/site-header";
import { env } from "@/lib/utils/env";
import { InfiniteExecutionGrid } from "@/components/home/infinite-execution-grid";

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: "Aamir Khan | System Thinking Portfolio",
    template: "%s | Aamir Khan",
  },
  description:
    "Premium portfolio system showcasing product thinking, architecture depth, and system-led project execution.",
  openGraph: {
    title: "Aamir Khan | System Thinking Portfolio",
    description:
      "A system-driven portfolio built to turn attention into trust and trust into opportunities.",
    url: env.siteUrl,
    siteName: "Aamir Portfolio System",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamir Khan | System Thinking Portfolio",
    description:
      "A premium portfolio that explains why projects exist, how they work, and what makes them valuable.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink antialiased">
        <AnalyticsProvider gaId={env.gaId} clarityId={env.clarityId}>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_60%)]" />
            <SiteHeader />
            {children}
            <SiteFooter />
            <InfiniteExecutionGrid />
          </div>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
