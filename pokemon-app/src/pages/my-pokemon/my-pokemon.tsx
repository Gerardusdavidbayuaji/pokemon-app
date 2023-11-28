import Navbar from "@/components/navbar";
import FooterMyPokemon from "@/components/footer-mypokemon";

const MyPokemon = () => {
  return (
    <div className="w-full h-screen font-poppins bg-[url('src/assets/background.png')] bg-no-repeat flex flex-col">
      <Navbar/>
        <h1 className="text-white text-center font-poppins font-bold sm:text-2xl md:text-3xl lg:text-5xl py-10">MY POKEMON</h1>
      <div className="bg-white container flex-grow mx-auto flex flex-col">
        <p>test</p>
      </div>
      <FooterMyPokemon/>
    </div>
  )
}

export default MyPokemon;