import { Inter } from "next/font/google";

import "./globals.css";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docto Techonalogies",
  description: "Product Dashboard for Docto Techonalogies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
