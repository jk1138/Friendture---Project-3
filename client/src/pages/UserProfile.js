import React, { Component } from "react";
import { connect } from 'react-redux';
import Navbar from "../components/Navbar";
import Edit from "../components/profile/index.js";
import "../components/profile/style.scss";
import API from "../utils/postAPI.js";



class Profile extends Component {

    // Profile page essentially. This is where you can access your sessions history (delete, comment, whatever) and edit your info.
    state = {
        username: null,
        comment: "",
        loading: true
    }

    componentDidMount() {
        this.getUsername();
        this.getCommentFromUser();
        // this.attachTrophies ();
    }

    getUsername() {
        let user = sessionStorage.getItem('username');
        this.setState({ username: user });
    }

    getCommentFromUser = (e) => {
        if (e) {
            let comment = e.target.value;
            this.setState({ comment: comment });
        }
    }

    releaseComment = (e) => {
        e.preventDefault();
        let seshID = e.target.id;
        this.setState({ seshID: seshID });
        API.postComment({
            username: this.state.username,
            comment: this.state.comment,
            sesh: seshID,
        })
            .then(res => {
                console.log(res);
                this.handleFindSesh();
                this.setState({ comment: "" });
            })
            .catch(err => console.log(`heres the issue: ${err}`))
    }

    render() {
        return (          
              
        )
    }
}
                                                                                                                        
export default Profile;
