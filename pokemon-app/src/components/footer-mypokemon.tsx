import { Button } from "./ui/button";

const FooterMyPokemon = () => {
    return (
      <div>
          <footer className="w-full h-16">
              <div className="h-full mx-auto flex container items-center justify-between py-4">
                <Button className="sm:block md:block lg:hidden bg-transparent">
                <img src="src/assets/burger-icon.png" alt="menu icon" className="h-4 w-auto"/></Button>
                <Button className="sm:block md:block lg:hidden bg-transparent">
                <img src="src/assets/home-icon.png" alt="home icon" className="h-4 w-auto"/></Button>
                <Button className="sm:block md:block lg:hidden bg-transparent">
                <img src="src/assets/back-icon.png" alt="back icon" className="h-4 w-auto"/></Button>
              </div>
          </footer>
      </div>
    )
  }
  
  export default FooterMyPokemon;