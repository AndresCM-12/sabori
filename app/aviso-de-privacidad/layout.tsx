import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Header from "../components/header/header";
import CustomFooter from "../components/footer";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabori Parma | Aviso de privacidad",
  description: "Sabori Parma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <Header />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
