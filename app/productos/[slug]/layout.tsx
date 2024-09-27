import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../globals.css";

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
  return <main>{children}</main>;
}
