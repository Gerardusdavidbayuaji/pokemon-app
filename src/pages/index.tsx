import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

import { getPokemon, Response } from "@/utils/pokemon";
import { formatId } from "@/utils/formatter";

import PokemonCard from "@/components/PokemonCard";
import Pagination from "@/components/Pagination";
import Layout from "@/components/Layout";
import { Loader } from "lucide-react";

const Home = () => {
  const [saveAllPokemons, setSaveAllPokemons] = useState<Response | null>(null);
  const [pokemons, setPokemons] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const fetchPokemonDatas = useCallback(async () => {
    try {
      setIsLoading(true);
      const query = Object.fromEntries([...searchParams]);
      const response = await getPokemon({ ...query });

      if (!searchQuery) {
        setSaveAllPokemons(response);
      }

      setPokemons(response);
      setIsLoading(false);
    } catch (error: any) {
      toast("Upss, something when wrong!", {
        description: error.toString(),
      });
    }
  }, [searchParams, searchQuery]);

  const filterPokemons = useCallback(() => {
    if (!searchQuery) return saveAllPokemons;

    return {
      ...saveAllPokemons,
      results:
        saveAllPokemons?.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [],
    };
  }, [searchQuery, saveAllPokemons]);

  useEffect(() => {
    if (searchQuery && saveAllPokemons) {
      setPokemons(filterPokemons());
    } else {
      fetchPokemonDatas();
    }
  }, [searchQuery, saveAllPokemons, filterPokemons, fetchPokemonDatas]);

  if (isLoading && !pokemons) {
    return (
      <div className="grow text-white flex gap-x-2 justify-center items-center h-full">
        <Loader className="animate-spin" />
        Loading pokemons...
      </div>
    );
  }

  return (
    <Layout>
      {pokemons?.results.length === 0 ? (
        <div className="grow text-white flex justify-center items-center h-full">
          <p>No pokemon found for "{searchQuery}"</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-2 p-2 overflow-y-auto">
            {pokemons?.results.map((pokemon) => {
              const id = formatId(pokemon.url);
              const name = pokemon.name;
              return <PokemonCard key={id} id={id} name={name} />;
            })}
          </div>
          {!searchQuery && <Pagination />}
        </>
      )}
    </Layout>
  );
};

export default Home;
