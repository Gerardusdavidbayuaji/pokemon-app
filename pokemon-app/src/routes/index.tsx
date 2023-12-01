import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPokemon from "@/pages/list-pokemon/list-pokemon";
import DetailsPokemon from "@/pages/details-pokemon/details-pokemon";
import PokemonApp from "@/pages/pokemon-app";
import MyPokemon from "@/pages/my-pokemon/my-pokemon";
import BattlePokemon from "@/pages/battle-pokemon/battle-pokemon";

export default function Router() {
  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <ListPokemon />,
    },
    {
      path: "/pokemon-app",
      element: <PokemonApp />,
    },
    {
      path: "/details-pokemon/:id_monster",
      element: <DetailsPokemon />,
    },
    {
      path: "/my-pokemon",
      element: <MyPokemon />,
    },
    {
      path: "/battle-pokemon",
      element: <BattlePokemon />,
    },
  ]);
 
  return <RouterProvider router={router} />;
}