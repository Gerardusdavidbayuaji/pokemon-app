import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getDetailPokemon } from "@/utils/pokemon/api";
import poke from "/assets/pokemon.png";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const DetailPokemon = () => {
  const params = useParams();
  const fetchDetailPokemon = async () => {
    try {
      const response = await getDetailPokemon(+params.id!);
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetailPokemon();
  });

  return (
    <Layout>
      <div className="p-2">
        {/* <Button className="bg-transparent mb-2 border border-white text-white px-2 flex justify-center items-center">
          <ChevronLeft />
          <p>Back</p>
        </Button> */}
        <div className="grid grid-cols-2 p-2 gap-x-2">
          <div className="flex flex-col justify-between">
            <img src={poke} alt="poke" className="w-auto h-full" />
            <div className="space-x-1">
              <Badge className="px-4 py-1 rounded-full bg-[#43AB92]">
                Lorem
              </Badge>
              <Badge className="px-4 py-1 rounded-full bg-[#00AAA0]">
                Ipsum
              </Badge>
            </div>
          </div>
          <div>
            <h1 className="flex justify-start border-b-2 border-white/20 mb-2 font-medium text-2xl text-white pb-1 italic">
              Stats
            </h1>
            <div className="flex flex-col mb-1 gap-y-1">
              <div className="flex justify-between text-white/50">
                <p className="font-normal text-base">Lorem</p>
                <p>50</p>
              </div>
              <Progress value={50} className="h-[0.5rem]" />
            </div>
            <div className="flex flex-col mb-1 gap-y-1">
              <div className="flex justify-between text-white/50">
                <p className="font-normal text-base">Lorem</p>
                <p>50</p>
              </div>
              <Progress value={50} className="h-[0.5rem]" />
            </div>
            <div className="flex flex-col mb-1 gap-y-1">
              <div className="flex justify-between text-white/50">
                <p className="font-normal text-base">Lorem</p>
                <p>50</p>
              </div>
              <Progress value={50} className="h-[0.5rem]" />
            </div>
            <div className="flex flex-col mb-1 gap-y-1">
              <div className="flex justify-between text-white/50">
                <p className="font-normal text-base">Lorem</p>
                <p>50</p>
              </div>
              <Progress value={50} className="h-[0.5rem]" />
            </div>
            <div className="flex flex-col mb-1 gap-y-1">
              <div className="flex justify-between text-white/50">
                <p className="font-normal text-base">Lorem</p>
                <p>50</p>
              </div>
              <Progress value={50} className="h-[0.5rem]" />
            </div>
            <div className="flex flex-col mb-1 gap-y-1">
              <div className="flex justify-between text-white/50">
                <p className="font-normal text-base">Lorem</p>
                <p>50</p>
              </div>
              <Progress value={50} className="h-[0.5rem]" />
            </div>
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
                <span className="font-normal text-lg">1 m</span>
              </p>
              <p className="font-medium text-xl text-white/50">
                Weight
                <br />
                <span className="font-normal text-lg">1 kg</span>
              </p>
              <p className="font-medium text-xl text-white/50">
                Habitat <br />
                <span className="font-normal text-lg">Klinnet Kos</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start rounded-md p-2 border-2 border-white/20 bg-[#00AAA020] text-white">
            <h1 className="flex w-full border-b-2 border-white/20 mb-2 font-medium text-2xl pb-1 italic">
              Abillity
            </h1>
            <p className="font-medium text-xl text-white/50"> › Bersin</p>
            <p className="font-medium text-xl text-white/50"> › Ngupil</p>
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
