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
        <div className="home-container">
            <div className="home-content">
                <CategoryNav />
                <FrontPageCarrusel images={image} />

            <div className="-active-auction-section">
                    <div className="-active-auction-content">
                    <h1>Active Auctions</h1>
                    <span> aqui te tiene que llevar al catalogo con los productos y el filtro de subastas activas</span>
                    <br />
                    <button className="-active-auction-button">See all active auctions</button>
                    </div>
                </div>
            <div className="-upcoming-auction-section">
                    <h1>Upcoming Auctions</h1>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
