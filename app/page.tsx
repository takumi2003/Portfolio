"use client";

import Contact from "@/app/component/Contact";
import Footer from "@/app/component/Footer";
import Github from "@/app/component/Github";
import Greeting from "@/app/component/Greeting";
import Header from "@/app/component/Header";
import Skill from "@/app/component/Skill";
import Top from "@/app/component/Top";
import Works from "@/app/component/Works";
import React from "react";



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
