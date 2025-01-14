import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from '../pages/catalogo/Catalogo';
import Home from "../pages/home/Home";


const Router = () => {
    return (
         <BrowserRouter>
            <Routes>
                <Route path= "/" element = {<Home />} />               
            {/*<Route path= "/login" element = {<Login />} />
                <Route path= "/registro" element = {<Register />} />*/}
                <Route path= "/catalogo" element = {<Catalogo />} />
               {/* <Route path= "/hoja-de-oferta" element = {<OfferPage />} />
                <Route path= "/subasta" element = {<Subasta />} /> 
                <Route path= "/contacto" element = {<Contact />} /> */}
            </Routes>
         </BrowserRouter>
    
         
    );




};

export default Router;