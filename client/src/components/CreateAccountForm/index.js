import React from "react";

function CreateAccountForm(props) {
    return (
        <div className="container">
            <form className="createAccount">
                <h3>Create Account</h3>
                <p>Enter a Username, Password, and your Email to create an Account</p>
                <label for="username" required>Username</label>
                <input type="text" {...props}/>

                <label for="password" required>Password</label>
                <input type="password" {...props}/>

                <label for="email" required>Email</label>
                <input type="email" {...props}/>
            </form>
        </div>
    );
};

export default CreateAccountForm;