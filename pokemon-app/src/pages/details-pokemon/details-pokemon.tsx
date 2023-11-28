import { Button } from "@/components/ui/button";

const DetailsPokemon = () => {
  return (
    <div className="h-full flex items-center justify-center bg-white object-center">
      <div className="w-1/3 h-screen py-5">

        {/* kelas gambar */}
        <div className="h-3/5 flex flex-col items-center justify-center pt-10 bg-[url('src/assets/background.png')] bg-no-repeat rounded-lg">
          <img src="src/assets/contoh-pokemon.png" alt="joko" className="h-64 w-auto"/>
        </div>

        {/* kelas nama */}
        <div className="w-5/6 mx-auto flex flex-col items-center justify-center rounded-lg bg-[#005086] mt-[-22px]">
          <p className="py-2 text-white text-lg font-bold">Joko Susilo</p> 
        </div>
        <div className="py-5">
          <p>
            Type: grass, poison <br />
            Stats: hp, attack, defense, special-attack, special-defense, speed <br />
            Abilities: overgrow, chlorophyll Some Moves: razor-wind, swords-dance, cut, bind, <br />vine-whip
          </p>
        </div>
        <Button className="mx-auto flex flex-col items-center justify-center w-24 bg-[#005086]">
          Catch!
        </Button>
        <div className="mx-auto flex items-center justify-between pt-4">
          <h3 className="font-poppins font-normal text-[#05BFDB]">My Pokemon</h3> 
          <img src="src/assets/back-icon.png" className="w-7 h-auto" alt="back-icon" />
        </div>
      </div>
    </div>
  )
}

export default DetailsPokemon;