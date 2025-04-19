import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Search from "@/pages/search";
import Home from "@/pages";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return <RouterProvider router={router} />;
}
