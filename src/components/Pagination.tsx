import { useSearchParams } from "react-router";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleNextPage = () => {
    const query = searchParams.get("offset");
    const oldOffset = query ? parseInt(query, 10) : 0;

    if (oldOffset <= 1300) {
      const newOffset = oldOffset + 20;
      searchParams.set("offset", String(newOffset));
    }

    setSearchParams(searchParams);
  };

  const handlePrevPage = () => {
    const query = searchParams.get("offset");
    const oldOffset = query ? parseInt(query, 10) : 0;

    if (oldOffset >= 20) {
      const newOffset = oldOffset - 20;
      searchParams.set("offset", String(newOffset));
    }

    setSearchParams(searchParams);
  };

  return (
    <div className="flex justify-end gap-x-2 m-2">
      <Button
        onClick={() => {
          handlePrevPage();
        }}
        className="bg-[#0d1d23]/50 text-[#f4f3f1] hover:bg-white/20 cursor-pointer transition-all duration-300"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={() => {
          handleNextPage();
        }}
        className="bg-[#0d1d23]/50 text-[#f4f3f1] hover:bg-white/20 cursor-pointer transition-all duration-300"
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default Pagination;
