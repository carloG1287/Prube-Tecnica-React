//Aqui usare el App.jsx para que Renderize las rutas de la aplicacion

import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/page.jsx";
import Lazy from "./pages/Lazy/page.jsx";
import Alluser from "./pages/AllUser/page.jsx";
import Search from "./pages/search/page.jsx";

//Con el metodo createHashRouter se crean las rutas de la aplicacion, habiendolas importado previamente
const router = createHashRouter([
  {
    //aqui digo que la ruta principal es Home
    path: "/",
    element: <Home />,
  },
  {
    path: "/lazy",
    element: <Lazy />,
  },
  {
    path: "/alluser",
    element: <Alluser />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default function App() {
  return (
    //Se renderiza el RouterProvider con el router creado
    <RouterProvider router={router}></RouterProvider>
  );
}
