import React from "react";
//https://react-chrono.vercel.app/features/custom-content.html
import { Chrono } from "react-chrono";
import { items } from "../../Data/workex";

import WorkTimelineCard from "./../WorkTimelineCard";
import "./style.css";

function WorkTimeline() {
    return (
        <div className="workex">
            <div className="workexChronoWrapper">
                <h1 className="workexTitle">Work Experience</h1>
                <Chrono
                    timelinePointShape="circle"
                    mode="VERTICAL_ALTERNATING"
                    // showAllCardsHorizontal={true}
                    useReadMore={true}
                    hideControls
                    scrollable
                    fontSizes={{
                        title: "h-6",
                    }}
                >
                    {items.map((item, index) => {
                        return (
                            <WorkTimelineCard
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                detailedText={item.detailedText}
                                detailedPoints={item.detailedPoints}
                                dateStarted={item.dateStarted}
                                dateStopped={item.dateStopped}
                            />
                        );
                    })}
                </Chrono>
            </div>
            <div className="workExQuote fs-3">
                Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work.
            </div>
            <div className="quoteAuthor fs-5"> - Steve Jobs</div>
        </div>
    );
}

export default WorkTimeline;
