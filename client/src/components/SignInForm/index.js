import React from "react";

function SignInForm(props) {
    return (
        <div>
            <form className="logIn">
                <h3>Welcome Back!</h3>
                <label for="username" required>Username</label>
                <input type="text" {...props} />

                <label for="password" required>Password</label>
                <input type="password" {...props}/>

            </form>
        </div>
    );
};

export default SignInForm;