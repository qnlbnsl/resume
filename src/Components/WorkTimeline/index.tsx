import React from "react";
//https://react-chrono.vercel.app/features/custom-content.html
import { Chrono } from "react-chrono";
import { items } from "../../Data/workex";

import WorkTimelineCard from './../WorkTimelineCard'
import "./style.css";

function WorkTimeline() {

    return (
        <div className="workex">
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
            <img className="workexImage" src="https://i.imgur.com/0Ql4q8M.png" alt="workex" />
        </div>
    );
}

export default WorkTimeline;
