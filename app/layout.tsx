import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import FileTree from "@/components/FileTree";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "whitcodes",
  description: "A collection of Whit Allee's coding projects and client work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mavenPro.className}>
        <div className="flex w-screen max-w-full">
          <FileTree/>
          <div className="pl-2 sm:pl-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
