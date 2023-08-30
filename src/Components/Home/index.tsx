import React from "react";
import "./style.css";
import HeroPicture from "../HeroPicture";
import Intro from "../IntroCarousel"
function Home() {
    return (
        <div className="container align-items-center">
            <div className="image-container">
                <HeroPicture />
            </div>
            <div className="intro-container">
                <Intro />
            </div>
        </div>
    )
}

export default Home;
