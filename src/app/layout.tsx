import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { seo, personalInfo } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  robots: "index, follow",
  alternates: {
    canonical: seo.url,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: personalInfo.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: "Software Engineer",
              description: seo.description,
              url: seo.url,
              email: personalInfo.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abu Dhabi",
                addressCountry: "AE",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "American University of Ras Al Khaimah",
              },
              knowsAbout: [
                "Software Engineering",
                "Artificial Intelligence",
                "Cybersecurity",
                "Python",
                "Java",
                "Parallel Computing",
              ],
              sameAs: [
                personalInfo.github,
                personalInfo.linkedin,
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen bg-cyber-bg text-text-primary antialiased scan-lines cyber-grid`}
      >
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neon-cyan focus:text-cyber-bg focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main className="flex-1" id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
