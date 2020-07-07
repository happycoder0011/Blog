import React from "react";
import Header from "../parts/header";
import Slider from "../parts/slider";
import Trendingposts from "../parts/trendingposts";
import Freshstories from "../parts/freshstories";
import Footer from "../parts/footer";


const Home = () => {
    return (
        <>
        <Header/>
        <Slider/>
        <Trendingposts/>
        <Freshstories/>
        <Footer/>
        </>
    );
};

export default Home;