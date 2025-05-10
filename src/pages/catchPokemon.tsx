import background from "/assets/background.jpg";
import Layout from "@/components/Layout";
import pokemon from "/assets/pokemon.png";
import ball from "/assets/pokeball.png";
import { Button } from "@/components/ui/button";

const CatchPokemon = () => {
  return (
    <Layout>
      <div className="h-full w-full justify-center items-center flex relative">
        <div className="h-full w-full absolute flex">
          <img
            src={background}
            alt="background"
            className="object-cover object-center"
          />
        </div>
        <div className="flex bg-white outline-black outline-1 top-10 right-40 absolute p-2 rounded-md text-black">
          This is bean!
        </div>
        <div className="absolute -mt-48 -mr-24">
          <img src={pokemon} alt="pokemon" className="w-72 h-auto" />
        </div>

        <div className="flex w-full justify-between items-end my-10 px-14 absolute bottom-0">
          <img
            src={ball}
            alt="pokemon"
            className="w-24 h-auto animate-bounce"
          />
          <Button className="w-20 bg-[#f13e2d]">Run</Button>
        </div>
      </div>
    </Layout>
  );
};

export default CatchPokemon;
