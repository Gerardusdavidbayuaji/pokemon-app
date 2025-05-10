import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getDetailPokemon } from "@/utils/pokemon/api";
import { formatTilte } from "@/utils/formatter";
import { Pokemon } from "@/utils/pokemon";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const DetailPokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const params = useParams();
  const fetchDetailPokemon = async () => {
    try {
      const response = await getDetailPokemon(+params.id!);
      setPokemon(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetailPokemon();
  }, []);

  return (
    <Layout>
      <div className="p-2">
        <div className="grid grid-cols-2 p-2 gap-x-2">
          <div className="flex flex-col justify-between">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
              alt={pokemon?.name}
              className="w-auto h-full"
            />
            <div className="space-x-1">
              {pokemon?.types.map((data, index) => (
                <Badge
                  key={index}
                  className="px-4 py-1 rounded-full bg-[#43AB92]"
                >
                  {data.type.name}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h1 className="flex justify-start border-b-2 border-white/20 mb-2 font-medium text-2xl text-white pb-1 italic">
              Stats
            </h1>
            {pokemon?.stats.map((data, index) => (
              <div key={index} className="flex flex-col mb-1 gap-y-1">
                <div className="flex justify-between text-white/50">
                  <p className="font-normal text-base">
                    {formatTilte(data.stat.name)}
                  </p>
                  <p>{data.base_stat}</p>
                </div>
                <Progress value={data.base_stat} className="h-[0.5rem]" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 p-2 gap-x-2">
          <div className="rounded-md p-2 border-2 border-white/20 bg-[#43AB9220] text-white">
            <h1 className="flex justify-start border-b-2 border-white/20 mb-2 font-medium text-2xl pb-1 italic">
              Information
            </h1>
            <div className="grid grid-cols-2 gap-y-2">
              <p className="font-medium text-xl text-white/50">
                Height <br />
                <span className="font-normal text-lg">{pokemon?.height} m</span>
              </p>
              <p className="font-medium text-xl text-white/50">
                Weight
                <br />
                <span className="font-normal text-lg">
                  {pokemon?.weight} kg
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start rounded-md p-2 border-2 border-white/20 bg-[#00AAA020] text-white">
            <h1 className="flex w-full border-b-2 border-white/20 mb-2 font-medium text-2xl pb-1 italic">
              Abillity
            </h1>
            {pokemon?.abilities.map((data, index) => (
              <p key={index} className="font-medium text-xl text-white/50">
                › {formatTilte(data.ability.name)}
              </p>
            ))}
          </div>
        </div>
        <Link to="/catch">
          <Button className="mt-1 p-5 bg-[#1F8A70]">Catch</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default DetailPokemon;
