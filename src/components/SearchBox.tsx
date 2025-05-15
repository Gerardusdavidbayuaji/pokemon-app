import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";

import { Input } from "./ui/input";

const SearchBox = () => {
  const [searchParamas, setSearchParams] = useSearchParams();

  const handleSearch = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParamas);

    if (value.trim() !== "") {
      newSearchParams.set("search", value.toLowerCase());
      newSearchParams.delete("offset");
    } else {
      newSearchParams.delete("search");
    }

    setSearchParams(newSearchParams);
  };

  const handleDebounce = debounce(
    (search: string) => handleSearch(search),
    500
  );

  return (
    <div className="w-64 max-sm:w-36">
      <Input
        type="text"
        placeholder="Search pokemon"
        onChange={(e) => handleDebounce(e.target.value)}
        defaultValue={searchParamas.get("search") || ""}
      />
    </div>
  );
};

export default SearchBox;
