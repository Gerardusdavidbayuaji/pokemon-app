import { HouseIcon, Undo2Icon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex px-28 py-4 justify-between">
      <div className="flex items-center bg-amber-200 rounded-md p-2 cursor-pointer">
        <HouseIcon />
      </div>
      <div className="flex items-center bg-amber-200 rounded-md p-2 cursor-pointer">
        <Undo2Icon />
      </div>
    </footer>
  );
};

export default Footer;
