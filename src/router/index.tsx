import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailPokemon from "@/pages/detailPokemon";
import CatchPokemon from "@/pages/catchPokemon";
import Home from "@/pages";

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
      path: "/catch",
      element: <CatchPokemon />,
    },
  ]);

  return <RouterProvider router={router} />;
}
