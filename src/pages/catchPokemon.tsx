import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";

import { Pokemon, getDetailPokemon } from "@/utils/pokemon";
import getDataFromLS from "@/utils/getLS";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { toast } from "sonner";

import background from "/assets/background.jpg";
import ball from "/assets/pokeball.png";

const CatchPokemon = () => {
  const [pokemonDatas, setPokemonDatas] = useState<Pokemon>();
  const [pokemons, setPokemons] = useState(getDataFromLS());
  const [nickname, setNickname] = useState<string>();

  const [catchPokemon, setCatchPokemon] = useState(false);
  const [btnSave, setBtnSave] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  const fetchDetailPokemon = async () => {
    try {
      const detailResponse = await getDetailPokemon(+params.id!);
      setPokemonDatas(detailResponse);
    } catch (error) {
      toast.error("Upss, error fetching datas");
    }
  };

  const handleAddPokemon = () => {
    let myPokemons = {
      nickname,
      data_pokemon: pokemonDatas,
    };

    setPokemons([...pokemons, myPokemons]);
    setNickname("");
    setCatchPokemon(false);

    toast.success("Pokemon now already in your My Pokemon");

    navigate(-1);
  };

  const handleNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
    setBtnSave(false);

    pokemons.map((items: any) => {
      if (newNickname === items.nickname) {
        setBtnSave(true);

        toast.success("Upss, nickname is already");
      }
    });
  };

  const rateCatch = () => {
    let rate = +(Math.random() * 100).toFixed(0);

    if (rate >= 80) {
      setCatchPokemon(true);

      toast.success("Congratulation!, you catch the pokemon.");
    } else {
      setCatchPokemon(false);

      toast.warning("Upss, You missed catch pokemon.");
    }
  };

  useEffect(() => {
    fetchDetailPokemon();
    localStorage.setItem("myPokemon", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <Layout>
      <div className="h-full w-full justify-center items-center flex relative">
        <div className="h-full w-full absolute flex z-10">
          <img
            src={background}
            alt="background"
            className="object-cover object-center"
          />
        </div>
        <div className="flex bg-white outline-black outline-1 top-5 right-40 absolute p-2 rounded-md text-black z-20">
          This is {pokemonDatas?.name}!
        </div>
        <div className="absolute -mt-48 -mr-24 z-20">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDatas?.id}.svg`}
            alt={pokemonDatas?.name}
            className="w-60 h-auto"
          />
        </div>

        <div className="flex w-full justify-between items-end my-10 px-14 absolute bottom-0 z-20">
          <img
            src={ball}
            alt="pokemon"
            className="w-20 h-auto animate-bounce"
            onClick={() => rateCatch()}
          />

          <Button onClick={() => navigate(-1)} className="w-20 bg-[#f13e2d]">
            Run
          </Button>
        </div>
      </div>
      {catchPokemon && (
        <div className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center">
          <div className="w-fit h-fit px-10 py-5 bg-neutral-900 border-8 rounded-3xl z-50 absolute text-white">
            <p className="text-center mb-5 text-3xl font-extrabold">
              Congratulation!!!
            </p>
            <p className="text-center mb-5 text-xl font-light">
              You caught
              <br />
              <span className="text-2xl font-semibold capitalize">
                {pokemonDatas?.name}
              </span>
            </p>
            <form
              autoComplete="off"
              className="h-full flex flex-col items-center gap-y-3"
              onSubmit={handleAddPokemon}
            >
              <label>Nickname</label>
              <input
                type="text"
                required
                className="text-white rounded-full px-2 text-center h-8 border border-white"
                onChange={handleNickname}
                value={nickname}
              />
              <br></br>
              <Button
                disabled={btnSave}
                type="submit"
                className="border-2 border-white"
              >
                Save
              </Button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CatchPokemon;
