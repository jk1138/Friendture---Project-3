import React from "react";

function SignInForm(props) {
    return (
        <div>
            <form>
                <label for="username">Username</label>
                <input type="text" {...props} />

                <label for="password">Password</label>
                <input type="password" {...props} />

            </form>
        </div>
    );
};

export default SignInForm;