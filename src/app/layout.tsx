import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "./providers/toastProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Churchil Owino | Designer & Full-stack Software Developer",
  description:
    "Hello, welcome to my portfolio webiste. Get to know my skills and review some of the projects I have designed and built. Start a conversation and, together, we could build something amazing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
