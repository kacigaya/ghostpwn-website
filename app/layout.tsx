import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ghostpwn // autonomous web pentesting agent",
  description:
    "GhostPWN is a Rust-based terminal assistant for offensive security research. Multi-provider LLM support, human-in-the-loop, lightweight architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="min-h-screen w-full bg-black text-[#c8f7c5] antialiased">
        {children}
      </body>
    </html>
  );
}
