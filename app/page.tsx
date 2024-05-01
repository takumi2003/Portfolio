"use client";

import React from "react";

import Header from "./Header/Page";
import Top from "./Top/Page";
import Contact from "./Contact/Page";
import Footer from "./Footer/Page";
import Github from "./Github/Page";
import Greeting from "./Greeting/Page";
import Skill from "./Skill/Page";
import Works from "./Works/Page";


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
