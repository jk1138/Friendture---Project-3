import React from "react";
import "./style.css";

function SignInButton(props) {
    return (
    <span {...props} role="button" tabIndex="0">
        Sign In
    </span>
    )
};

export default SignInButton;