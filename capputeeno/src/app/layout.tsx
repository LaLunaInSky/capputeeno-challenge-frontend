import "./globals.css";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import TemplateLayout from "./components/templates/layout.template";
import ProviderQueryClientWrapper from "./contexts/providers/query_client_wrapper.provider";
import ProviderContextProjectsDisplay from "./contexts/providers/context_projects_display.provider";

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
        <ProviderContextProjectsDisplay>
          <ProviderQueryClientWrapper>
            <TemplateLayout>
              { children }
            </TemplateLayout>
          </ProviderQueryClientWrapper>
        </ProviderContextProjectsDisplay>
      </body>
    </html>
  );
}
