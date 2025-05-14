import { useEffect, useState } from "react";

import { CatchPokemons } from "@/utils/pokemon/types";
import getDataFromLS from "@/utils/getLS";

import MyPokemonCard from "@/components/MyPokemonCard";
import Layout from "@/components/Layout";
import { Trash2 } from "lucide-react";

const MyPokemons = () => {
  const [pokemons, setPokemons] = useState<CatchPokemons[]>(getDataFromLS());

  const deletePokemon = (nickname: string) => {
    const filtered = pokemons.filter((element: any) => {
      return element.nickname !== nickname;
    });
    setPokemons(filtered);
  };

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(pokemons));
  }, [pokemons]);
  return (
    <Layout>
      <>
        {pokemons.length === 0 ? (
          <div className="h-full flex grow items-center justify-center text-white">
            No pokemon catch
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 p-2 gap-2">
              {pokemons.map((pokemon, index) => {
                return (
                  <div key={index} className="relative">
                    <div className="absolute right-0 p-1 hover:text-red-500 cursor-pointer border rounded-tr-lg rounded-bl-lg">
                      <Trash2 onClick={() => deletePokemon(pokemon.nickname)} />
                    </div>
                    <MyPokemonCard
                      nickname={pokemon.nickname}
                      data={pokemon.data_pokemon}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default MyPokemons;
