import React from "react";

function CreateAccountForm(props) {
    return (
        <div>
            <form>
                <label for="username">Username</label>
                <input type="text" {...props} />

                <label for="password">Password</label>
                <input type="password" {...props} />

                <label for="email">Email</label>
                <input type="email" {...props} />
            </form>
        </div>
    );
};

export default CreateAccountForm;