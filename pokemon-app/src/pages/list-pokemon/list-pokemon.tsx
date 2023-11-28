import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const ListPokemon = () => {
  return (
    <div className="w-full h-screen font-poppins bg-[url('src/assets/background.png')] bg-no-repeat flex flex-col">
      <Navbar/>
      <div className="mx-auto container font-poppins py-10">
        <h1 className="text-white text-center font-poppins font-bold sm:text-2xl md:text-3xl lg:text-5xl">POKEMOON.</h1>
        <p className="text-white text-center font-poppins pb-7 sm:text-sm md:text-lg lg:text-2xl">A catalogue of your pokemon</p>
        <Input className="rounded-full sm:w-1/4 md:w-1/2 lg:w-2/5 w-full mx-auto" placeholder="Search pokemon here..."></Input>
      </div>
      <div className="bg-white container flex-grow mx-auto flex flex-col">
        <p>test</p>
      </div>
      <Footer/>
    </div>
  )
}

export default ListPokemon;