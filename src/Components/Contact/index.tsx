import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormData } from "./../../Types";
import { sendEmail } from "./../../Utils/sendEmail";
import Toast from "react-bootstrap/Toast";
import "./style.css";
function Contact() {
    const emptyFormData: FormData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
    const [formData, setFormData] = useState({ ...emptyFormData });
    const [successShow, setSuccessShow] = useState(false);
    const [failShow, setFailShow] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const success = await sendEmail(formData);
        if (success) {
            setSuccessShow(true);
        } else {
            setFailShow(true);
        }
    };

    return (
        <div className="Contact">
            <Form style={{ maxWidth: "300px" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Your email is NOT shared with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="subject"
                        placeholder="Enter subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div style={{ height: "50px" }}></div>

            <Toast
                onClose={() => setSuccessShow(false)}
                show={successShow}
                delay={3000}
                autohide
                className="toast"
            >
                <Toast.Header>
                    <strong className="me-auto">
                        Form Submitted Successfully
                    </strong>
                </Toast.Header>
                <Toast.Body>
                    Thank you for reaching out. I appreciate the time you have
                    taken to contact me, I will get back you via email shortly!
                </Toast.Body>
            </Toast>

            <Toast
                onClose={() => setFailShow(false)}
                show={failShow}
                delay={3000}
                autohide
                className="toast"
            >
                <Toast.Header>
                    <strong className="me-auto">Error Submitting Form</strong>
                </Toast.Header>
                <Toast.Body>
                    I apologize for the inconvenience. Your message could not be
                    send. Please email me at info@kunalbans.al and i will get
                    back to you promptly!
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default Contact;
