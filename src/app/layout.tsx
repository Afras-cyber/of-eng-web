import type { Metadata } from "next";
import "./globals.css";

import { Container, Typography } from "@mui/material";
import LeftSection from "@/components/LeftSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-vertical-timeline-component/style.min.css";
import { Suspense } from "react";
import Loading from "./loading";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
export const metadata: Metadata = {
  title: "Olivier Fargeon M. ENG",
  description: `Description about Olivier Fargeon M. ENG`,
  authors: {
    name: "Olivier Fargeon M. ENG",
  },
  publisher: "DMT - Dev Multi Tech",
  keywords: [
    "DMT",
    "Dev Multi Tech",
    "Olivier Fargeon M. ENG",
    "Olivier Fargeon",
    "Chemieingenieurwesen",
    "Chemische Technik",
    "Ingenieur für Chemie",
    "Chemieingenieur",
    "Prozessingenieur",
    "Anlagenbau",
    "Verfahrenstechnik",
    "Chemische Verfahren",
    "Forschung und Entwicklung Chemie",
    "Chemische Produktion",
    "Industrielle Chemie",
    "Chemische Anlagen",
    "Reaktionsengineering",
    "Katalyse",
    "Chemische Prozessoptimierung",
    "Chemische Sicherheit",
    "Laborarbeit Chemie",
    "Chemische Simulationen",
    "Chemische Prozesse",
    "Umweltingenieurwesen Chemie",
  ],
  openGraph: {
    type: "website",
     
    title: "Olivier Fargeon M. ENG",
    description: "Description about Olivier Fargeon M. ENG",
    images: [
      {
        url: "https://of-ingconsult.com/_next/image?url=%2Fprofile.png&w=640&q=75",
        width: 800,
        height: 600,
        alt: "Olivier Fargeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OFargeon",
    title: "Olivier Fargeon",
    description: "Description about Olivier Fargeon M. ENG",
    images: ["https://x.com/OFargeon/photo"],
  },
  viewport: "width=device-width, initial-scale=1",

  robots: "index, follow",
};
export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        {/* <script src="https://www.google.com/recaptcha/enterprise.js?render=6LeJ9woqAAAAAPnUAFxP90N-giYSEZxrOvD51xf5"></script> */}
        <Header {...props} />

        <Container
          maxWidth="lg"
          className="bg-blue-50 flex flex-col pt-20"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <Typography
            variant="body1"
            className="font-bold text-right w-full py-3 text-orange-500"
          >
         Neue Anschrift: Humboldtstraße 9, 84453 Mühldorf am Inn
          </Typography>
          <div className="w-full flex flex-col lg:flex-row">
            <LeftSection />
            <Suspense fallback={<Loading />}>
              <div className="m-auto w-full lg:w-9/12 xl:w-10/12 bg-white rounded p-3 min-h-[80vh] mb-12 pb-10">
                {props.children}
              </div>
            </Suspense>
          </div>
        </Container>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
