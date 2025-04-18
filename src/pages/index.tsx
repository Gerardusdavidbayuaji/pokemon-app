import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getPokemon, Response } from "@/utils/pokemon";
import { formatId } from "@/utils/formatter";

import PokemonCard from "@/components/PokemonCard";
import Layout from "@/components/Layout";

const App = () => {
  const [pokemons, setPokemons] = useState<Response>();

  const fetchPokemonDatas = async () => {
    try {
      const response = await getPokemon();
      setPokemons(response);
    } catch (error: any) {
      toast("Upss, something when wrong!", {
        description: error.toString(),
      });
    }
  };

  useEffect(() => {
    fetchPokemonDatas();
  }, []);

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
      </Layout>
    </>
  );
};

export default App;
