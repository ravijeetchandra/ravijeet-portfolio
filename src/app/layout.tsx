import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://ravijeetchandra.github.io/ravijeet-portfolio";

export const metadata: Metadata = {
  title: "Ravijeet Chandra | Lead Data Scientist & AI Engineer",
  description:
    "Lead Data Scientist with 8+ years of experience designing scalable AI systems, recommendation engines, enterprise analytics platforms, and Generative AI solutions.",
  keywords: [
    "Ravijeet Chandra",
    "Lead Data Scientist",
    "AI Engineer",
    "Generative AI",
    "Machine Learning",
    "LLM",
    "RAG",
    "Recommendation Systems",
    "Enterprise AI",
    "Dr. Martens",
    "Fractal Analytics",
    "Accenture",
    "Secure Meters",
    "Bengaluru Data Scientist",
    "Enterprise AI Architecture",
    "MLOps",
    "Data Engineering",
  ],
  authors: [{ name: "Ravijeet Chandra" }],
  icons: {
    icon: "/ravijeet-portfolio/profile.jpeg",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Ravijeet Chandra | Lead Data Scientist & AI Engineer",
    description:
      "Lead Data Scientist with 8+ years of experience designing scalable AI systems, recommendation engines, and Generative AI solutions.",
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Ravijeet Chandra Portfolio",
    images: [
      {
        url: `${BASE_URL}/profile.jpeg`,
        width: 500,
        height: 500,
        alt: "Ravijeet Chandra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravijeet Chandra | Lead Data Scientist & AI Engineer",
    description:
      "Lead Data Scientist with 8+ years of experience in Enterprise AI, Generative AI, and scalable ML systems.",
    images: [`${BASE_URL}/profile.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "gJ9_kA-Z-0hZUInfyBL56DLt9bElMTfbJijnqe3asrs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Ravijeet Chandra",
      givenName: "Ravijeet",
      familyName: "Chandra",
      jobTitle: "Lead Data Scientist & AI Engineer",
      description:
        "Lead Data Scientist with 8+ years of experience designing scalable AI systems, recommendation engines, enterprise analytics platforms, and Generative AI solutions.",
      url: BASE_URL,
      sameAs: [
        "https://www.linkedin.com/in/ravijeetchandra/",
        "https://github.com/ravijeetchandra",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Generative AI",
        "LLM",
        "RAG",
        "Recommendation Systems",
        "Enterprise AI",
        "MLOps",
        "Data Engineering",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Dr. Martens plc",
      },
      image: `${BASE_URL}/profile.jpeg`,
    },
    {
      "@type": "WebSite",
      name: "Ravijeet Chandra Portfolio",
      url: BASE_URL,
      description:
        "Lead Data Scientist with 8+ years of experience in Enterprise AI, Generative AI, and scalable ML systems.",
    },
    {
      "@type": "WebPage",
      name: "Ravijeet Chandra | Lead Data Scientist & AI Engineer",
      description:
        "Lead Data Scientist with 8+ years of experience designing scalable AI systems, recommendation engines, enterprise analytics platforms, and Generative AI solutions.",
      url: BASE_URL,
      about: {
        "@type": "Person",
        name: "Ravijeet Chandra",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
