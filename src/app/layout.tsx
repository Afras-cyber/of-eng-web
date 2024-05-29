import type { Metadata } from "next";
import "./globals.css";

import { Container, } from "@mui/material";
import LeftSection from "@/components/LeftSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'react-vertical-timeline-component/style.min.css';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
export const metadata: Metadata = {
  title: "Oliver Fargeon M.ENG",
  description: `Discription about Oliver Fargeon M.ENG`,
};


export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>

          <Header {...props} />

          <Container
            maxWidth="lg"
            className="bg-blue-50 flex flex-col pt-20"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            }}
          >
            <div className="w-full flex flex-col sm:flex-row">
              <LeftSection />
              <div className="w-full sm:w-10/12 bg-white rounded p-3 min-h-[80vh] mb-12">
                {props.children}
              </div>
            </div>
          </Container>
          <footer>
            <Footer />
          </footer>

      
      </body>
    </html>
  );
}
