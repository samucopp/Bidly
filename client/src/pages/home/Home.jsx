import React from "react";
import CategoryNav from "../../components/carrusels/CategoryNav";
import FrontPageCarrusel from "../../components/carrusels/FrontPageCarrusel";
import ActiveAuctionsSection from "../../components/active-auction-section/ActiveAuctionsSection";
import { Outlet } from "react-router-dom";



const Home = () => {
    const image = [
        '/image/portada_tres.jpg',
        '/image/portada_ok.jpg',
        '/image/portadauno.jpg',
        '/image/portada_cinco.jpg',
    ];
    return (
        <div className="home-container">
            <div className="home-content">
                <CategoryNav />
                <FrontPageCarrusel images={image} />
                <ActiveAuctionsSection /> 
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
