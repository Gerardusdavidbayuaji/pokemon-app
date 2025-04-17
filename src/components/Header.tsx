import SearchBox from "./SearchBox";
import Logo from "./Logo";
import Catched from "./Catched";
const Header = () => {
  return (
    <header className="flex px-8 py-4 justify-between items-center">
      <Logo />
      <SearchBox />
      <Catched />
    </header>
  );
};

export default Header;
