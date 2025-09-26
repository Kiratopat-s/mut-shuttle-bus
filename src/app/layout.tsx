import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer";
import { Upper } from "@/components/upper";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MUT Shuttle Bus",
  description:
    "A simple shuttle bus booking application for Mahanakorn technology university.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} ${kanit.variable} ${kanit.style} antialiased`}
      >
        <NuqsAdapter>
          <div className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
            <Upper />
            {children}
            <Footer />
          </div>
        </NuqsAdapter>
      </body>
    </html>
  );
}
