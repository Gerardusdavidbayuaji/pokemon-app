import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { PokemonsType } from "@/utils/types/pokemon";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const DetailsPokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonsType>();
  const { id_monster } = useParams();

  useEffect(() => {
    fetchDataPokemons();
  }, []);

  function fetchDataPokemons() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id_monster}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <div className="w-full h-screen font-poppins bg-[url('src/assets/background.png')] bg-no-repeat flex flex-col">
      <Navbar/>
      <div className="container flex-grow mx-auto flex flex-col bg-[#EEEEEE]">
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className=" flex flex-col justify-center items-center content-center w-30 h-30 shadow-lg rounded-lg overflow-hidden bg-[#FF6969] border-1 shadow-black/40">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id_monster}.svg`}
            alt=""
            className="p-4 h-64"
          />
          <div className="grid grid-cols-2 gap-2 px-2">
            {pokemon?.types.map((data, index) => (
              <p
                className="bg-[#b7d0da] border-1 rounded-lg text-center p-1 text-white"
                key={index}
              >
                <span className="p-1">{data.type.name}</span>
              </p>
            ))}
          </div>
        </div>
        <div className=" w-30 h-30 border-1 shadow-lg shadow-black/40 rounded-lg text-start p-5 text-xs grid gap-3 capitalize bg-[#7EC8AC]">
          {pokemon?.stats.map((data) => (
            <div key={data.stat.name}>
              <p className="font-semibold">{data.stat.name}</p>
              <div className="w-full h-1">
                <div
                  className="bg-[#FF6969] h-1"
                  style={{ width: `${data.base_stat}%` }}
                ></div>
              </div>
              <p>{data.base_stat}</p>
            </div>
          ))}
        </div>
        <div className=" w-30 h-30  border-1 shadow-lg shadow-black/40 rounded-lg text-start p-5 text-xs grid gap-3 capitalize col-span-2 bg-[#7EC8AC]">
          <p><span className="text-sm font-semibold">Name:</span> {pokemon?.name}</p>
          <p><span className="text-sm font-semibold"> Weight:</span> {pokemon?.weight}</p>
          <p><span className="text-sm font-semibold">Height:</span> {pokemon?.height}</p>
        </div>
        <div className="border-1 shadow-lg shadow-black/40 rounded-lg text-start p-5 text-xs capitalize bg-[#7EC8AC]">
          {pokemon?.abilities.map((data) => (
            <p key={data.ability.name} className="mb-3 font-semibold">
              {data.ability.name}
            </p>
          ))}
        </div>
        <div className="  border-1 shadow-lg shadow-black/40 rounded-lg text-start p-5 text-xs capitalize bg-[#7EC8AC]">
          {pokemon?.moves.slice(0, 5).map((data) => (
            <p key={data.move.name} className="mb-3 font-semibold">
              {data.move.name}
            </p>
          ))}
        </div>
        <div className="grid col-span-2 justify-center mt-3">
          <div className="flex items-center justify-center">
            <div className="border-1 shadow-lg shadow-black/40 rounded-lg p-3 hover:cursor-pointer w-32 text-center text-white font-semibold bg-[#FF6969]">
            <Link to="/battle-pokemon">Catch!</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default DetailsPokemon;