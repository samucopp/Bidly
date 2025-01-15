import React from "react";
import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"

const Root = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Navbar/>
            { (location.pathname.includes("/catalogo")|| location.pathname.includes("/subastas")) &&(
                <h1>Aqui iria el banner de {location.pathname.replace("/","")}</h1>
            ) }
            <Outlet/>
        </div>
    );
};

export default Root;






