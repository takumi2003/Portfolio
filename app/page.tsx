"use client";

import React from "react";

import Header from "./_components/layouts/Header/Header";
import Top from "../features/portfolio/components/Top/Top";
import Greeting from "../features/portfolio/components/Greeting/Greeting";
import Skill from "../features/portfolio/components/Skill/Skill";
import Works from "../features/portfolio/components/Works/Works";
import Github from "../features/portfolio/components/Github/Github";
import Contact from "../features/portfolio/components/Contact/Contact";
import Footer from "./_components/layouts/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="ml-20 mt-10">
        <Top />
        <Greeting />
        <Skill />
        <Works />
        <Github />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
