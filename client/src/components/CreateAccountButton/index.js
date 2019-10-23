import React from "react";
import "./style.css";

function CreateAccountButton(props) {
    return (
    <button {...props} role="button" tabIndex="0" className="form-btn sx log-in" type="submit">
        Create Account
    </button>
    )
};

export default CreateAccountButton;