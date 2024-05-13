import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jgxdev.com"),
  title: {
    default: "Sitio web de José Germán Martínez",
    template: `%s | José Germán Martínez`,
  },
  description: "Software Developer, JavaScript, TypeScript, React, Next.js",
  keywords: "software, developer, javascript, typescript, react, nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
