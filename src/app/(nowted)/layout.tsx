import NextTopLoader from "nextjs-toploader";
import { Source_Sans_3 } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";
import Sidebar from "@/components/Sidebar/Sidebar";
import { InitialLoadingPage } from "@/components/Loader";
import "../globals.css";
import { Animate } from "@/components/Animate";
import { Metadata } from "next";

const SourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Colabcube notes",
  keywords: ["notes applications", "notes website", "noteslists", "notes"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SourceSansPro.className}>
        <InitialLoadingPage>
          <NextTopLoader color="#F86F03" />
          <div className="lg:w-[calc(100vw-300px)] lg:ml-auto">
            <Sidebar />
            <Animate>
              <div className="lg:flex">{children}</div>
            </Animate>
          </div>
          <Toaster />
        </InitialLoadingPage>
      </body>
    </html>
  );
}
