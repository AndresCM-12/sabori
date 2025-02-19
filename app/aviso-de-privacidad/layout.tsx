import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Header from "../components/header/header";
import CustomFooter from "../components/footer";
import { fetchArrayInBlogWithMarkDown } from "../utils/methods";
import { avisoPrivacidadInfo } from "../utils/constants";
import Home from "./page";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabori Parma | Aviso de privacidad",
  description: "Sabori Parma",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const info = await fetchArrayInBlogWithMarkDown(avisoPrivacidadInfo);

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
