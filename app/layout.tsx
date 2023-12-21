import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat } from "./fonts";
import Navbar from "@/Components/Navbar";
import { wrapper } from "@/Store/Slice";

import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Recipe App Search your favorite recipes online using this app.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default wrapper.withRedux(RootLayout);
