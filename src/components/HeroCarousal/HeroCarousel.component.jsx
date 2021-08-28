import React, { useState, useEffect } from "react";
import axios from "axios";

//import slick 
import HeroSlider from "react-slick";

//import arrow component
import { NextArrow, PrevArrow } from "./Arrows.component"

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            //asynchronous call
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        // dots: true,
        infinite: true,
        //speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const settings = {
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider{...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-56 md:h-80 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rouded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider{...settingsLG}>
                    {
                        images.map((image) => (
                            <div className="w-full h-96 px-2 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;