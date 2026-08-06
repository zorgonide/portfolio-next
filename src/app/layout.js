import { Lato } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.scss";
import "./experience.scss";
import BootstrapClient from "./components/BootstrapClient";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.ammarkhurshid.com"),
  title: "Ammar Khurshid | Portfolio",
  description: "The portfolio of Ammar Khurshid, a developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
