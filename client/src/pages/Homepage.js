import React, { Component } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import CreateAccountButton from "../components/CreateAccountButton";
import SignInForm from "../components/SignInForm";
import SignInButton from "../components/SignInButton";


class Homepage extends Component {
    state = {
        username: "",
        password: "",
        email: ""
    };

    // sign up form
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    // submit create account
    handleCreateAccountFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.username && this.state.password && this.state.email) {
            // insert API to save the new user :
            // API.saveUser({
            // username: this.state.username,
            // password: this.state.password,
            // email: this.state.email
            // })
            // .then(res => route to user profile)
            // .catch(err => console.log(err));
        }
    };

    // submit sign in
    handleSignInFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            // insert API to route to user's profile :
            // PLACEHOLDER
            // API.userProfile({
            // username: this.state.username,
            // password: this.state.password,
            // })
            // .then(res => route to user profile id)
            // .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <CreateAccountForm />
                <CreateAccountButton disabled={!(this.state.username && this.state.password && this.state.email)}
                    onClick={() => this.handleCreateAccountFormSubmit}
                />
                <SignInForm />
                <SignInButton disabled={!(this.state.username && this.state.password)}
                    onClick={() => this.handleSignInFormSubmit}
                />
            </div>
        )
    }
}

export default Homepage;