import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <header className="w-full sticky top-0 bg-[#005086]/60 h-16 z-50">
          <nav className="mx-auto flex container items-center justify-between py-4">
            <Link to="/pokemon-app"className="font-poppins text-xl text-white hidden sm:block">Pokemoon.</Link>
            <div className="flex gap-4">
            <Link to="/pokemon-app" className="font-poppins font-normal text-white">Home</Link>
            <Link to="/my-pokemon" className="font-poppins font-normal text-white">My Pokemon</Link>
            </div>
          </nav>
      </header>
  )
}

export default Navbar;