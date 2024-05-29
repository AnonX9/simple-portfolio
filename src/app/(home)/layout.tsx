import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://simple-portfolio-alpha.vercel.app/"),

  title: "Nametissa",
  authors: {
    name: "AnonX9",
  },

  description: "A full stack dev, who loves discovery.",
  openGraph: {
    title: "Nametissa",
    description: "A full stack dev, who loves discovery.",
    url: "https://simple-portfolio-alpha.vercel.app/",
    siteName: "Nametissa",
    images: "/og.png",
    type: "website",
  },
  keywords: ["portfolio", "nametissa", "avaika", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
