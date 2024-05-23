import Image from "next/image";
import React from "react";
import { FaBars } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
export default function Drawer({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen:any,
  setIsOpen:any
}) {
  return (
    <main
      className={
        " fixed overflow-hidden z-[102] bg-primary/25 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col  overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg w-full flex items-center justify-between">
            <Image src="/logo-web-transparent.png" alt="logo" width={400} height={200} className="w-2/12" />
            <div onClick={() => setIsOpen(!isOpen)}>
              <IoClose />
            </div>
          </header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
