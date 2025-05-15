import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailPokemon from "@/pages/detailPokemon";
import CatchPokemon from "@/pages/catchPokemon";
import Home from "@/pages";
import MyPokemons from "@/pages/myPokemons";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pokemon/:id",
      element: <DetailPokemon />,
    },
    {
      path: "/catch/:id",
      element: <CatchPokemon />,
    },
    {
      path: "/mypokemons",
      element: <MyPokemons />,
    },
  ]);

  return <RouterProvider router={router} />;
}
