import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./styles.scss";
import "./experience.scss";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.ammarkhurshid.com"),
  title: "Ammar Khurshid | Portfolio",
  description: "The portfolio of Ammar Khurshid, a fullstack web developer building with React and Next.js.",
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#07080d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
