import React from "react";
import "./style.css";

function SubmitButton(props) {
    return (
    <span {...props} role="button" tabIndex="0">
        Create Account
    </span>
    )
};

export default SubmitButton;