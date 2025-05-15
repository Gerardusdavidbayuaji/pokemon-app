import { Link } from "react-router-dom";
import logo from "/assets/pokeball.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-10 h-auto" />
      </div>
    </Link>
  );
};

export default Logo;
