import { createBrowserRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from '../pages/catalogo/Catalogo';
import Home from "../pages/home/Home";
import Root from "../pages/root/Root";
import ProductList from "../pages/productList/ProductList";
import Modal from "../components/ModalTarjeta/ModalTarjeta";

// Definimos nuestras rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "catalogo",
        element: <Catalogo />,
        children: [
          {
            path: ":productId",
            element: <Modal visible={true}/>
          }
        ]
      }
      /*{
          path: "/registro",     
          element: <registro />,
        },
   
        {
          path: "/acerca-de",     
          element: <acerca-de />,
        }, 
      {
        path: "/contacto",
        element: <contacto />,
      },*/
    ],
  },
]);
export default router;