import type { Metadata } from "next";
import { Inter, Playfair_Display, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Alex Mercer | Full-Stack Developer",
  description: "Portfolio of Alex Mercer, a passionate full-stack developer specializing in modern web applications. Expert in React, Node.js, and Next.js ecosystems.",
  keywords: ["Alex Mercer", "Full-Stack Developer", "Web Developer", "React Developer", "Next.js Portfolio", "Software Engineer"],
  authors: [{ name: "Alex Mercer" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmercer-portfolio.demo/",
    title: "Alex Mercer | Full-Stack Developer",
    description: "Portfolio of Alex Mercer, a passionate full-stack developer specializing in modern web applications.",
    siteName: "Alex Mercer Portfolio",
    images: [
      {
        url: "https://alexmercer-portfolio.demo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Mercer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Mercer | Full-Stack Developer",
    description: "Portfolio of Alex Mercer, a passionate full-stack developer specializing in modern web applications.",
    images: ["https://alexmercer-portfolio.demo/og-image.png"],
    creator: "@alexmercerdev",
  },
  alternates: {
    canonical: "https://alexmercer-portfolio.demo/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${oswald.variable} font-sans antialiased flex flex-col min-h-screen text-foreground relative`}
      >
        <header className="absolute top-0 z-50 w-full pt-8 pb-4">
          <div className="container mx-auto px-6 flex items-center justify-between">
            {/* Logo Left */}
            <span className="font-playfair font-bold text-3xl tracking-tight italic w-[150px]">Alex.</span>

            {/* Center Navigation */}
            <nav className="hidden md:flex gap-10 text-[13px] font-semibold tracking-wider text-gray-800">
              <a href="#" className="hover:text-black transition-colors">Home</a>
              <a href="#projects" className="hover:text-black transition-colors">Works</a>
              <a href="#" className="hover:text-black transition-colors">About</a>
              <a href="#experience" className="hover:text-black transition-colors">Services</a>
              <a href="#" className="hover:text-black transition-colors">Testimonial</a>
            </nav>

            {/* CTA Right */}
            <div className="w-[150px] flex justify-end">
              <a href="#" className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </header>

        <main className="grow container mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="py-12 text-center text-xs font-medium tracking-wide text-gray-400 mt-20">
          <p>© {new Date().getFullYear()} Alex Mercer. Designed inspired by Madison.</p>
        </footer>
      </body>
    </html>
  );
}
