import React from "react";

//component
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousel.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default DefaultLayout;