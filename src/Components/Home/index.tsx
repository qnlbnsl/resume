import React from "react";
import "./style.css";
import HeroPicture from "../HeroPicture";
import Intro from "../IntroCarousel";
function Home() {
    return (
        <div className="container">
            <HeroPicture />
            <Intro />
        </div>
    );
}

export default Home;
