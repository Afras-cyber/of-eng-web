import type { Metadata } from "next";
import "./globals.css";

import { Container } from "@mui/material";
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
  title: "Olivier Fargeon M.ENG",
  description: `Discription about Olivier Fargeon M.ENG`,
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
          <div className="w-full flex flex-col lg:flex-row">
            <LeftSection />
            <Suspense fallback={<Loading />}>
              <div className="m-auto w-full lg:w-9/12 xl:w-10/12 bg-white rounded p-3 min-h-[80vh] mb-12">
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
