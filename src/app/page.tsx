
import React from "react";

import Header from "./component/Header";
import Top from "./component/Top";
import Footer from "./component/Footer";
import Greeting from "./component/Greeting";
import Skill from "./component/Skill";
import Works from "./component/Work";
import Github from "./component/Github";
import Contact from "./component/Contact";

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
