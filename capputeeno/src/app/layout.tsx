import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/all-page/header/header";
import { Main } from "@/components/all-page/main/Main";
import { FilterContextProvider } from "@/contexts/filter-context";
import { Saira } from "next/font/google";
import { ClientWrapper } from "@/contexts/client-wrapper";
import { Suspense } from "react";

const saira = Saira(
  {
    weight: [
      '300', '400', '500', '600'
    ],
    subsets: ['latin']
  }
)

export const metadata: Metadata = {
  title: "capputeeno",
  description: "capputeeno store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <FilterContextProvider>
          <ClientWrapper>
            <Header />
            <Main>  
              <Suspense>
                {children}
              </Suspense>
            </Main>
          </ClientWrapper>
        </FilterContextProvider>
      </body>
    </html>
  );
}
