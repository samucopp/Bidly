import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import './Root.css';

const Root = () => {
    const location = useLocation();
  
    const getBannerImage = () => {
        if (location.pathname.includes("/catalog")) {
            return "/image/catalogo.png";  // Ruta desde public
        } else if (location.pathname.includes("/auction")) {
            return "/image/subasta.jpg";   // Ruta desde public
        }
        return null;
    };

    const getPageTitle = () => {
        return location.pathname.replace("/", "").charAt(0).toUpperCase() + 
               location.pathname.replace("/", "").slice(1);
    };

    return (
        <div className="root-container">
            <Navbar />
            {(location.pathname.includes("/catalog") || location.pathname.includes("/auction")) && (
                <div className="banner-container">
                    <img 
                        src={getBannerImage()}
                        alt="Banner"
                        className="banner-background"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                    <div className="banner-overlay" />
                    <div className="banner-content">
                        <h1 className="banner-title">
                            {getPageTitle()}
                        </h1>
                    </div>
                </div>
            )}
            <Outlet />
        </div>
    );
};
 
export default Root;


