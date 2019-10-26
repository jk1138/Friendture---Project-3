import React from "react";

function CreateAccountButton(props) {
    return (
    <button {...props} tabIndex="0" className="form-btn dx log-in" type="submit">
        Create Account
    </button>
    )
};

export default CreateAccountButton;