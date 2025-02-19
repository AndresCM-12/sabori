import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Header from "../components/header/header";
import CustomFooter from "../components/footer";
import { fetchArrayInPost } from "../utils/methods";
import Home from "./page";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabori Parma | Recetas",
  description: "Sabori Parma",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const info = await fetchArrayInPost("recetas-info");

  return (
    <html lang="es">
      <body className={lato.className}>
        <Header />
        <Home info={info} />
        <CustomFooter />
      </body>
    </html>
  );
}
