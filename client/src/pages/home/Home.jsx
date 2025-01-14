import React from "react";
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>Futuro contenido de home</h1>
            <Outlet/>
        </div>
    );
};

export default Home;
