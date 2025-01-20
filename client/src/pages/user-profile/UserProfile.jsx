import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import './UserProfile.css';


const UserProfile = () => {
    const location = useLocation();
    const getBannerImage = () => {
        if (location.pathname.includes("/catalog")) {
            return "/image/catalogo.png";  // Ruta desde public
        } else if (location.pathname.includes("/auction")) {
            return "/image/subasta.jpg";   // Ruta desde public
        }
        return null;
    };
    return (
        <div className="user-profile-container">
            

        </div>
    );
};

export default UserProfile;