import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

const Header = () => {
  const titles = ["Greeting","SKILLS","WORKS","GitHub", "CONTACT"];
  return (
    <ul className="sticky top-0 z-10 flex h-20 max-w-full items-center justify-center gap-5 bg-[#eae7e2]">
      {titles.map((title) => {
        return(
          <li className="mr-6" key={`#${title}`}>
        <AnchorLink className="font-bold" offset="80" href={`#${title}`}>
          {title}
        </AnchorLink>
      </li>
        )
      })}
      
    </ul>
  );
};

export default Header;