import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonsType } from "@/utils/types/pokemon";
import { AiOutlineClose } from "react-icons/ai";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const MyPokemon = () => {
  const [datas, setDatas] = useState<PokemonsType[]>([]);
  const navigate = useNavigate();

  function onClickDetail(index: number) {
    navigate(`/details-pokemon/${index}`);
  }

  function handleDelPokemon(data: PokemonsType) {
    let dupeDatas: PokemonsType[] = datas.slice();

    const filterData = dupeDatas.filter(
      (item) => item?.sub_name !== data?.sub_name
    );
    localStorage.setItem("MyPokemon", JSON.stringify(filterData));
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [localStorage]);

  function fetchData() {
    const getPokemon = localStorage.getItem("MyPokemon");
    if (getPokemon) {
      setDatas(JSON.parse(getPokemon));
    }
  }

  return (
    <div className="w-full h-screen font-poppins bg-[url('/assets/background.png')] bg-no-repeat flex flex-col">
      <Navbar />
      <h1 className="text-white text-center font-poppins font-bold sm:text-2xl md:text-3xl lg:text-5xl py-10">
        MY POKEMON
      </h1>
      <div className="flex bg-[#EEEEEE] container flex-grow mx-auto flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">


        {datas?.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center content-center w-30 h-30 border-1 shadow-lg shadow-black/40 rounded-xl relative"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.id}.svg`}
              alt=""
              className="p-4 h-64"
              onClick={() => {
                onClickDetail(data?.id || 0);
              }}
            />
            <AiOutlineClose
              className="h-7 w-7 absolute top-2 right-2 hover:cursor-pointer"
              onClick={() => handleDelPokemon(data)}
            />
            <div className="bg-[#005086] w-full text-lg text-white text-center uppercase p-2 rounded-xl">
              <p>{data?.name}</p>
              <p>({data?.sub_name})</p>
            </div>
          </div>
        ))}
                </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPokemon;
