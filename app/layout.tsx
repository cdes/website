import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

export const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["latin", "arabic"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "أحمد الحداد",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          ibm.className,
          "flex justify-center items-center min-h-screen text-white bg-zinc-950"
        )}
      >
        {children}
      </body>
    </html>
  );
}
