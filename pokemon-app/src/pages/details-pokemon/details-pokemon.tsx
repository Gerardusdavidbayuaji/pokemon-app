import { Input } from "@/components/ui/input";

const DetailsPokemon = () => {
  return (
    <div className="w-full h-screen font-poppins bg-[url('src/assets/background.png')]">
      {/* header */}
      <header className="w-full sticky top-0 bg-[#005086]/60 h-16 z-50">
        <nav className="mx-auto flex container items-center justify-between py-4">
          <h3 className="font-poppins text-xl text-white hidden sm:block">Pokemoon.</h3> 
          <h3 className="font-poppins font-normal text-white">My Pokemon</h3> 
        </nav>
      </header>
      
      <div className="mx-auto container font-poppins py-10">
        <h1 className="text-white text-center font-poppins font-bold sm:text-2xl md:text-5xl">POKEMOON.</h1>
        <p className="text-white text-center font-poppins pb-7 sm:text-sm md:text-2xl">A catalogue of your pokemon</p>
        <Input className="rounded-full sm:w-1/4 md:w-1/2 w-full mx-auto"></Input>
      </div>

      {/* konten utama */}
      <div className="bg-white container grow mx-auto h-3/6 py-4 px-8 flex flex-col">
        <p>test</p>
      </div>
      {/* footer */}
      <footer className="w-full h-16">
        <div className="flex items-center container px-6 h-full">
          <p>test footer</p>
        </div>
      </footer>
    </div>
  )
}

export default DetailsPokemon;