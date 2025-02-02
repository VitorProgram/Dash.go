import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Mantine UI
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

// Styled
import StyledComponentsRegistry from "../../lib/styled-components/registry";
import { GlobalStyle } from "@/styles/global/global";
import ThemeProvider from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dash.go",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <MantineProvider>
            <ThemeProvider>
              {children}
              <GlobalStyle />
            </ThemeProvider>
          </MantineProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
