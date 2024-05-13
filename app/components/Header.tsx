"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("New Launch");

  return (
    <div className="text-md h-20 flex  justify-between items-center border px-2 border-gray-300">

      <div className="text-black font-bold">
        <p className="text-shadow font-serif">Mployee me</p>
      </div>

      <div className="mb-2">
        <Link
          href="/home"
          className={`mr-6 ${activeLink === "Resume Scan" ? "active" : ""}`}
          onClick={() => setActiveLink("Resume Scan")}
        >
          Resume Scan
        </Link>
        <Link
          href="/home"
          className={`mr-6 ${activeLink === "New Launch" ? "active" : ""}`}
          onClick={() => setActiveLink("New Launch")}
        >
          New Launch
        </Link>
        <Link
          href="/home"
          className={`mr-6 ${activeLink === "Resume Keywords" ? "active" : ""}`}
          onClick={() => setActiveLink("Resume Keywords")}
        >
          Resume Keywords
        </Link>
        <Link
          href="/home"
          className={`mr-6 ${activeLink === "Career Blogs" ? "active" : ""}`}
          onClick={() => setActiveLink("Career Blogs")}
        >
          Career Blogs
        </Link>

        <Link
          href="/about"
          className={`mr-6 ${activeLink === "About Us" ? "active" : ""}`}
          onClick={() => setActiveLink("About Us")}
        >
          About Us
        </Link>
      </div>

      <div className="bg-gray-200 p-1 rounded-lg flex items-center">
        <CgProfile className="mr-2" />
        <p className="text-gray-700">Devyanshu</p>
        <IoIosArrowDown className="ml-2" />
      </div>
    </div>
  );
};
