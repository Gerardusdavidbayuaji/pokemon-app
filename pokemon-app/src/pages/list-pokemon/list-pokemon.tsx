import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface PokemonType {
  name?: string;
  url?: string;
}

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  function onClickDetail(index: number) {
    navigate(`/details-pokemon/${index}`);
  }

  useEffect(() => {
    fetchDataPokemons();
  }, []);

  function fetchDataPokemons() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  const searchPokemon = (term: string) => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name?.toLowerCase().includes(term.toLowerCase())
    );
    setPokemons(filteredPokemons);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;

    setSearchTerm(term);

    if (term.length >= 2) {
      const filteredSuggestions = pokemons
        .map((pokemon) => pokemon.name || "")
        .filter((name) => name.toLowerCase().includes(term.toLowerCase()));

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchPokemon(searchTerm);
  };

  return (
    <div className="w-full h-screen font-poppins bg-[url('/assets/background.png')] bg-no-repeat flex flex-col">
      <Navbar />
      <div className="mx-auto container font-poppins py-10">
        <h1 className="text-white text-center font-poppins font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          POKEMOON.
        </h1>
        <p className="text-white text-center font-poppins pb-7 sm:text-sm md:text-lg lg:text-lg">
          A catalogue of your pokemon
        </p>
        <form onSubmit={handleSearchSubmit}>
          <Input
            className="rounded-full sm:w-1/2 md:w-1/2 lg:w-2/5 w-full mx-auto"
            placeholder="Search pokemon here..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
              className="text-white"
              key={index} 
              onClick={() => setSearchTerm(suggestion)}>
              {suggestion}
              </li>
            ))}
          </ul>
        </form>
      </div>
      <div className="bg-[#EEEEEE] container flex-grow mx-auto flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">
          {pokemons.map((pokemon, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center content-center w-30 h-30 border-4 shadow-lg shadow-black border-[#EEEEEE] rounded-xl "
              onClick={() => {
                onClickDetail(index + 1);
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  index + 1
                }.svg`}
                alt=""
                className="p-4 h-64"
              />
              <div className="bg-[#005086] w-full text-lg uppercase p-2 rounded-xl">
                <p className="text-white text-center font-poppins">{pokemon.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ListPokemon;
