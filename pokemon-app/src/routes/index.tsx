import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DetailsPokemon from "@/pages/details-pokemon/details-pokemon";

export default function Router() {
  const router = createBrowserRouter([
    {
          path: "details-pokemon",
          element: <DetailsPokemon/>,
        },
  ]);

  return <RouterProvider router={router} />;
}