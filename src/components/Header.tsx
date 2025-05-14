import Collection from "./Collection";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  return (
    <header className="flex px-8 py-4 justify-between items-center bg-linear-to-b from-[#1f4247] to-[#0d1d23] rounded-t-md">
      <Logo />
      {location.pathname === "/" && <SearchBox />}

      <Collection />
    </header>
  );
};

export default Header;
