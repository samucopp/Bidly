import { createBrowserRouter } from "react-router-dom";
import Catalogo from '../pages/catalogo/Catalogo';
import RegisterForm from "../pages/auth/RegisterForm";
import Home from "../pages/home/Home";
import Root from "../pages/root/Root";
import Modal from "../components/ModalTarjeta/ModalTarjeta";
import Subasta from '../pages/subasta/Subasta';
import AboutUs from "../pages/about-us/AboutUs";
import UserProfile from "../pages/user-profile/UserProfile";

// Definimos nuestras rutas
const router = createBrowserRouter([
  {
    path: "register",
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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-profile",
        element: <UserProfile />,
      },
      {
        path: "auction/:auctionId",
        element: <Subasta />
      },
      {
        path: "catalog",
        element: <Catalogo />,
        children: [
          {
            path: ":auctionId",
            element: <Modal visible={true}/>
          }
        ]
      }
      /*
      {
        path: "/contacto",
        element: <contacto />,
      },*/
    ],
  },
]);
export default router;