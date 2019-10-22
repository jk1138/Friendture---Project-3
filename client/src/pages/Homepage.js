import React, { Component } from "react";
import CreateAccountForm from "../components/Form"


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

    // submit sign up
    handleFormSubmit = (e) => {
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

    render() {
        return (
            <CreateAccountForm />
        )
    }
}

export default Homepage;