import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getPokemon, Response } from "@/utils/pokemon";
import { formatId } from "@/utils/formatter";

import PokemonCard from "@/components/PokemonCard";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";
import { Loader } from "lucide-react";

const App = () => {
  const [pokemons, setPokemons] = useState<Response>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const fetchPokemonDatas = async () => {
    try {
      setIsLoading(true);
      const query = Object.fromEntries([...searchParams]);
      const response = await getPokemon({ ...query });

      setPokemons(response);
      setIsLoading(false);
    } catch (error: any) {
      toast("Upss, something when wrong!", {
        description: error.toString(),
      });
    }
  };

  useEffect(() => {
    fetchPokemonDatas();
  }, [searchParams]);

  return (
    <>
      <Layout>
        {isLoading ? (
          <div className="grow text-white flex gap-x-2 justify-center items-center h-full">
            <Loader className="animate-spin" />
            loading...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-2 p-2 overflow-y-auto">
              {pokemons?.results.map((pokemon) => {
                const id = formatId(pokemon.url);
                const name = pokemon.name;
                return <PokemonCard id={id} name={name} />;
              })}
            </div>
            <Pagination />
          </>
        )}
      </Layout>
    </>
  );
};

export default App;
