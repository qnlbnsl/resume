import React from "react";
import "./style.css";


function HeroPicture() {
    return (
        <div className="hero-container">
            {/* Image Container */}
            <div className="image-container">
                <img
                    src="/static/images/home.jpg"
                    alt="Your Profile"
                    className="profile-image"
                />
            </div>
        </div>
    )
}

export default HeroPicture;
