import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravijeet Chandra | Lead Data Scientist & AI Engineer",
  description:
    "Lead Data Scientist with 8+ years of experience designing scalable AI systems, recommendation engines, enterprise analytics platforms, and Generative AI solutions.",
  keywords: [
    "AI Engineer",
    "Lead Data Scientist",
    "Generative AI",
    "Machine Learning",
    "LLM",
    "RAG",
    "Recommendation Systems",
    "Enterprise AI",
  ],
  authors: [{ name: "Ravijeet Chandra" }],
  openGraph: {
    title: "Ravijeet Chandra | Lead Data Scientist & AI Engineer",
    description:
      "Lead Data Scientist with 8+ years of experience designing scalable AI systems, recommendation engines, and Generative AI solutions.",
    type: "website",
    locale: "en_US",
    url: "https://ravijeet-chandra.com",
    siteName: "Ravijeet Chandra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravijeet Chandra | Lead Data Scientist & AI Engineer",
    description:
      "Lead Data Scientist with 8+ years of experience in Enterprise AI, Generative AI, and scalable ML systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/ravijeet-portfolio/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}