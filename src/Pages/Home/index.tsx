import React from "react";
import "./style.css";
import HeroPicture from "./../../Components/HeroPicture";
import Intro from "./../../Components/IntroCarousel";
function Home() {
    return (
        <div className="container">
            <HeroPicture />
            <Intro />
        </div>
    );
}

export default Home;
