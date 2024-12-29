import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "ClubShelf",
  description: "ClubShelf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Optionally keep your DashboardWrapper if it doesn't conflict */}
          <DashboardWrapper>
            {children}
          </DashboardWrapper>
        </Providers>
      </body>
    </html>
  );
}
