import { createBrowserRouter } from "react-router-dom";
import Catalogo from '../pages/catalogo/Catalogo';
import RegisterForm from "../pages/auth/RegisterForm";
import Home from "../pages/home/Home";
import Root from "../pages/root/Root";
import Modal from "../components/ModalTarjeta/ModalTarjeta";

// Definimos nuestras rutas
const router = createBrowserRouter([
  {
    path: "registro",
    element: <RegisterForm />,
  },
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
            element: <Modal visible={true} />
          }
        ]
      }
      /*
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