import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "./style.css";
export default function Footer() {
    return (
        <div className="Footer text-center text-lg-center">
            <div className="d-lg-block">
                <span>Get connected on social networks:</span>
            </div>
            <div>
                <a
                    href="https://twitter.com/qnlbnsl"
                    className="me-4 text-reset"
                >
                    <MDBIcon fab icon="twitter" />
                </a>
                <a
                    href="https://www.linkedin.com/in/qnlbnsl/"
                    className="me-4 text-reset"
                >
                    <MDBIcon fab icon="linkedin" />
                </a>
                <a
                    href="https://github.com/qnlbnsl"
                    className="me-4 text-reset"
                >
                    <MDBIcon fab icon="github" />
                </a>
            </div>
            <div>
                © 2023 Copyright: &nbsp;
                <a className="text-reset fw-bold" href="https://kunalbans.al/">
                    KunalBans.al
                </a>
            </div>
        </div>
    );
}
