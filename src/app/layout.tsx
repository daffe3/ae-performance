import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "A&E Performance AB — Mark & Anläggning, Falun",
    template: "%s | A&E Performance AB",
  },
  description:
    "Markentrepenad, fastighetsskötsel och maskintjänster i Dalarna. " +
    "Kontakta A&E Performance AB i Falun för offert.",
  openGraph: {
    siteName: "A&E Performance AB",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
