import { HouseIcon, Undo2Icon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex px-20 py-4 justify-between bg-linear-to-b from-[#0d1d23] to-[#1f4247] rounded-b-md">
      <div className="flex items-center bg-white/20 text-[#f4f3f1] rounded-md p-2 cursor-pointer">
        <HouseIcon />
      </div>
      <div className="flex items-center bg-white/20 text-[#f4f3f1] rounded-md p-2 cursor-pointer">
        <Undo2Icon />
      </div>
    </footer>
  );
};

export default Footer;
