import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../globals.css";
import Header from "../../components/header/header";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabori Parma | Detalles del producto",
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
      </body>
    </html>
  );
}
