import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creatorforge.com"),
  title: {
    default: "CreatorForge — Where young creators build, connect, and grow",
    template: "%s · CreatorForge",
  },
  description:
    "CreatorForge is a platform for kids 8 and older to download playful challenges, get the right tools, collaborate with specialists, and build real tech and art projects — then present their solutions to the world.",
  keywords: [
    "kids STEM",
    "STEAM",
    "robotics for kids",
    "coding for kids",
    "art and technology",
    "project-based learning",
  ],
  openGraph: {
    title: "CreatorForge — Where young creators build, connect, and grow",
    description:
      "Playful challenges, real tools, university mentors, and a stage to present. Every kid has a big idea waiting to be forged into reality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
