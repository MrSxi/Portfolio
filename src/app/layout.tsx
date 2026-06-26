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
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  robots: "index, follow",
  openGraph: {
    title: seo.title,
    description: seo.description,
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
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen bg-cyber-bg text-text-primary antialiased scan-lines cyber-grid`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
