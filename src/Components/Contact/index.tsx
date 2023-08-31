import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {FormData} from './../../Types'
import {sendEmail} from "./../../Utils/sendEmail"
function Contact() {
    const emptyFormData: FormData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    const [formData, setFormData] = useState({ ...emptyFormData} );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        sendEmail(formData)
        // Code to send email here
        // TODO: Show some sort of success message
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name"  name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="subject" placeholder="Enter subject" name="subject" value={formData.subject} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange}  />
            </Form.Group>
            <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default Contact;
