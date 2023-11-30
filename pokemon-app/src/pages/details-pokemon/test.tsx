import { Button } from "@/components/ui/button"

<div className="w-1/3 h-screen py-5 px-5 bg-[#EEEEEE]">

        {/* kelas gambar */}
        <div className="h-3/5 flex flex-col items-center justify-center pt-10 bg-[url('src/assets/background.png')] bg-no-repeat rounded-lg">
          <img src="src/assets/contoh-pokemon.png" alt="joko" className="h-64 w-auto shadow-xl rounded-lg"/>
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
        <Button className="mx-auto flex flex-col items-center justify-center w-24 bg-[#7EC8AC]">
          Catch!
        </Button>
        <div className="mx-auto flex items-center justify-between pt-4">
          <h3 className="font-poppins font-normal text-[#05BFDB]">My Pokemon</h3>
          <Button className="bg-[#005086]"><img src="src/assets/back-icon.png" className="w-auto h-5" alt="back-icon" /></Button> 
        </div>
      </div>