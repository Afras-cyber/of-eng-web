"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Container, Slide } from "@mui/material";
import Theme from "@/lib/Theme";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
function Header(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function HideOnScroll(props: Props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

 
  // }, []);
  return (
    <Theme>
      <HideOnScroll {...props}>
        <AppBar
          className={`bg-white text-black font-title ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <Container maxWidth="lg" className="bg-white">
            <nav>
              <div className="flex justify-between items-center py-2">
                <div>
                  <Image
                    className="w-16 object-contain"
                    alt="company logo"
                    src="/logo-web-transparent.png"
                    width={500}
                    height={500}
                  />
                </div>
                <div
                  className="block sm:hidden p-2 rounded hover:bg-gray-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FaBars />
                </div>
                <ul className="hidden sm:flex space-x-3 ">
                  <li>
                    <h1>
                      <Link href="/">Home</Link>
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <Link href="/">Performance</Link>
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <Link href="/">Projects</Link>
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <Link href="/">Links</Link>
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <Link href="/">Contact Us</Link>
                    </h1>
                  </li>
                  <li>
                    <h1>
                      <Link href="/">About</Link>
                    </h1>
                  </li>
                </ul>
              </div>
            </nav>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex-1 bg-blue-50">
          <ul className="flex flex-col space-y-3 p-5 ">
            <li>
              <h1>
                <Link href="/">Home</Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link href="/">Performance</Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link href="/">Projects</Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link href="/">Links</Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link href="/">Contact Us</Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link href="/">About</Link>
              </h1>
            </li>
          </ul>
        </div>
      </Drawer>
    </Theme>
  );
}

export default Header;
