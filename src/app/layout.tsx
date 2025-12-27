import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ojo Dare Johnson | Full-Stack Developer",
    template: "%s | Ojo Dare"
  },
  description: "Full-Stack Developer specializing in MERN stack and Next.js with TypeScript and Tailwind CSS. Turning ideas into scalable web apps. Based in Nigeria, available for remote work.",
  keywords: ["Next.js", "React", "TypeScript", "Full-Stack Developer", "MERN Stack", "Portfolio", "Web Development", "Nigeria", "Ojo Dare"],
  authors: [{ name: "Ojo Dare Johnson", url: "https://github.com/generalbang" }],
  creator: "Ojo Dare Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codrex-portfolio.vercel.app",
    title: "Ojo Dare Johnson | Full-Stack Developer",
    description: "Full-Stack Developer specializing in MERN stack and Next.js with TypeScript and Tailwind CSS. Turning ideas into scalable web apps.",
    siteName: "Codrex Portfolio",
    images: [
      {
        url: "/avatar-placeholder.png", // Ideally a specific OG image
        width: 1200,
        height: 630,
        alt: "Ojo Dare Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojo Dare Johnson | Full-Stack Developer",
    description: "Full-Stack Developer specializing in MERN stack and Next.js with TypeScript and Tailwind CSS. Turning ideas into scalable web apps.",
    images: ["/avatar-placeholder.png"],
    creator: "@codrex", 
  },
  metadataBase: new URL("https://codrex-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
