import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <ul className="sticky top-0 z-10 flex h-20 max-w-full items-center justify-center gap-5 bg-[#eae7e2]">
      <li className="mr-6">
        <AnchorLink className="font-bold" offset="80" href="#greeting">
          Greeting
        </AnchorLink>
      </li>
      <li className="mr-6">
        <AnchorLink className="font-bold" offset="80" href="#skills">
          SKILLS
        </AnchorLink>
      </li>
      <li className="mr-6">
        <AnchorLink className="font-bold" offset="80" href="#works">
          WORKS
        </AnchorLink>
      </li>
      <li className="mr-6">
        <AnchorLink className="font-bold" offset="80" href="#github">
          GitHub
        </AnchorLink>
      </li>
      <li className="mr-6">
        <AnchorLink className="font-bold" offset="80" href="#contact">
          CONTACT
        </AnchorLink>
      </li>
    </ul>
  );
};

export default Header;
