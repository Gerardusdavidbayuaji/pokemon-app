import SearchBox from "./SearchBox";
import Catched from "./Catched";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex px-8 py-4 justify-between items-center bg-linear-to-b from-[#1f4247] to-[#0d1d23] rounded-t-md">
      <Logo />
      <SearchBox />
      <Catched />
    </header>
  );
};

export default Header;
