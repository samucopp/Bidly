import React from "react";
import CategoryNav from "../../components/carrusels/CategoryNav";
import FrontPageCarrusel from "../../components/carrusels/FrontPageCarrusel";
import { Outlet } from "react-router-dom";
import './Home.css';


const Home = () => {
    const image = [
        '/image/portada_tres.jpg',
        '/image/portada_ok.jpg',
        '/image/portada_dos.jpg',
        '/image/portada_cinco.jpg',
      ];
    return (
        <div>
            <CategoryNav/>
            <FrontPageCarrusel images={image} />
            <h1>Seccion de novedades</h1>
            <Outlet/>
        </div>
    );
};

export default Home;
