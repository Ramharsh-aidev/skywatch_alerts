import type { Metadata } from "next";
import GlobalStyle from "../components/GlobalStyles";
import "./globals.css"; // ✅ Keep global utility classes (like font-sans, Tailwind, etc.)
import { inter, poppins } from "./fonts"; // ✅ Import fonts from shared module

export const metadata: Metadata = {
  title: "SkyWatch Alerts",
  description: "Real-time flight tracking with proximity alerts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <GlobalStyle /> {/* ✅ Injects your styled-jsx global dark theme */}
        {children}
      </body>
    </html>
  );
}
