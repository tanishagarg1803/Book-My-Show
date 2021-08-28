
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import axios from "axios";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";


import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            //asynchronous call
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            //asynchronous call
            const getMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            //asynchronous call
            const getMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto py-16">
                    <h1 className="text-xl font-bold text-gray-800 my-3 "> The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-bms-800 py-12">
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        <div className="hidden md:flex">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier" className="w-full h-full" />
                        </div>
                        <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand New Releases every Friday" isDark />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={upcomingMovies} title="Online Streaming Events" isDark={false} />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={topRatedMovies} title="Outdoor Events" isDark={false} />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={popularMovies} title="Laughter Therapy" isDark={false} />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={upcomingMovies} title="Popular Events" isDark={false} />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={topRatedMovies} title="The Latest Plays" isDark={false} />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={popularMovies} title="Top Games & Sports Events" isDark={false} />
            </div>

            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={upcomingMovies} title="Explore Fun Activities" isDark={false} />
            </div>
        </>
    );
};

export default HomePage;