import { Link } from "react-router-dom";
import { StarIcon } from "lucide-react";

const Catched = () => {
  return (
    <Link to="/catch">
      <div className="flex items-center bg-white/20 text-[#f4f3f1] rounded-md p-2 cursor-pointer">
        <StarIcon />
      </div>
    </Link>
  );
};

export default Catched;
