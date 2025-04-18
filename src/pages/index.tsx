import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getPokemon, Response } from "@/utils/pokemon";
import { formatId } from "@/utils/formatter";

import PokemonCard from "@/components/PokemonCard";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";

const App = () => {
  const [pokemons, setPokemons] = useState<Response>();
  const [searchParams] = useSearchParams();

  const fetchPokemonDatas = async () => {
    try {
      const query = Object.fromEntries([...searchParams]);
      const response = await getPokemon({ ...query });

      setPokemons(response);
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
        <div className="grid grid-cols-2 gap-2 p-2 overflow-y-auto">
          {pokemons?.results.map((pokemon) => {
            const id = formatId(pokemon.url);
            const name = pokemon.name;
            return <PokemonCard id={id} name={name} />;
          })}
        </div>
        <Pagination />
      </Layout>
    </>
  );
};

export default App;
