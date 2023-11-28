import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

const CostomLayoutPokemon = () => {
  return (
    <div className="h-full flex items-center justify-center bg-white object-center py-10">
      <div className="w-1/3 h-48 py-5 bg-[#005086] rounded-lg">
        <h3 className="text-white text-center font-semibold text-lg">Congratulation you caught bulbasaur</h3>
        <p className="text-white pl-24 ml-1 pt-3 text-sm">Nickname</p>
        <Input className="mx-auto flex flex-col items-center justify-center w-64" placeholder="Enter your pokemon nickname"></Input>
        <div className="pt-3">
        <Button className="mx-auto flex flex-col items-center justify-center w-24 bg-[#05BFDB]">
          Submit
        </Button>
        </div>
      </div>
    </div>
  )
}

export default CostomLayoutPokemon;