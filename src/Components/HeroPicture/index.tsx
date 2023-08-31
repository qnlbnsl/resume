import React from "react";
import "./style.css";


function HeroPicture() {
    return (
            <div className="image-container">
                <img
                    src="/static/images/home.jpg"
                    alt="Your Profile"
                    className="profile-image"
                />
            </div>
    )
}

export default HeroPicture;
