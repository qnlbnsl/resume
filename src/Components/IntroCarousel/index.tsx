import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { intro } from "./../../Data/intro";
import "./style.css";
function Intro() {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setCurrentSectionIndex(selectedIndex);
    };
    return (
        <div className="Intro">
            <Carousel
                data-bs-theme="dark"
                activeIndex={currentSectionIndex}
                onSelect={handleSelect}
                className="Intro-Carousel"
            >
                {intro.map((section, index) => (
                    <Carousel.Item
                        key={index}
                        className="Intro-Carousel-Item"
                        interval={100000}
                    >
                        <Carousel.Caption className="Intro-Carousel-Caption">
                            <div className="carousel-div">
                                <h3 className="h-6">{section.title}</h3>
                                <p className="fs-6">{section.content}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Intro;
