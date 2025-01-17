"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Mengecek apakah pengguna sedang scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener saat komponen dihapus
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between gap-5 px-3 py-3 max-md:py-0 sticky top-0 left-0 z-10 transition-all duration-300 ease-in-out ${
          scrolling ? "bg-slate-500 shadow-lg" : "bg-cyan-500"
        }`}
      >
        <h1 className="block px-2 py-1 max-md:py-3">LOGO</h1>

        {/* Mobile Menu */}
        <ul>
          <li className="md:hidden md:p-0">
            <Hamburger
              size={25}
              color="white"
              toggled={isOpen}
              toggle={setOpen}
            />
          </li>
        </ul>

        <ul
          className={`absolute top-10 left-0 w-full bg-cyan-500 p-5 md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:bg-slate-500 hover:rounded-md active:bg-violet-100 hover:active:bg-violet-200">
            <Link
              href={"/"}
              className="block px-2 py-1"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-md active:bg-violet-100 hover:active:bg-violet-200">
            <Link
              href={"/about"}
              className="block px-2 py-1"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-md active:bg-violet-100 hover:active:bg-violet-200">
            <Link
              href={"/contact"}
              className="block px-2 py-1"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Menu */}
        <ul className="flex gap-4 justify-between max-md:hidden">
          <li className="hover:bg-slate-500 hover:rounded-md active:bg-violet-100 hover:active:bg-violet-200">
            <Link href={"/"} className="block px-2 py-1">
              Home
            </Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-md active:bg-violet-100 hover:active:bg-violet-200">
            <Link href={"/about"} className="block px-2 py-1">
              About
            </Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-md active:bg-violet-100 hover:active:bg-violet-200">
            <Link href={"/contact"} className="block px-2 py-1">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
