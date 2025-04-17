import logo from "/assets/pokeball.png";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <img src={logo} alt="logo" className="w-10 h-auto" />
    </div>
  );
};

export default Logo;
