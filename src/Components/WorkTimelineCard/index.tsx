import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { WorkExperience } from "./../../Types";

export default function WorkTimelineCard(props: WorkExperience) {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const formatDate = (date: Date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    };

    const endDate = props.dateStopped ? formatDate(props.dateStopped) : 'Present';

    return (
        <>
            <div className="workexCard">
                <div className="workexCardTitle">
                    <h3>{props.title}</h3>
                    <h4>{props.subtitle}</h4>
                    <span className="workexCardDate">{formatDate(props.dateStarted)} - {endDate}</span>
                </div>
                <div className="workexCardText">
                    <p>{props.detailedText}</p>
                </div>
                <Button className="detailsButton" onClick={handleShow}>See Details</Button>
            </div>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Job Details for {props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {props.detailedPoints.map((point, index) => {
                            return <li key={index}>{point}</li>;
                        })}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
