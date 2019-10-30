import React, { Component } from "react";
import Nav from "../components/Navbar/index.js";
import postAPI from "../utils/postAPI.js";

class FriendFeed extends Component {

    state = {
        posts: [],
        title: "",
        user: "",
        date: ""
    }

    componentDidMount() {
        this.gettingPosts();
    }

    gettingPosts = () => {
        postAPI.getPosts().then(
            (res) => {
                console.log(res);
                this.setState({
                    posts: res.data, title: "", user: "", date: ""
                })
            }

        ).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Nav />

            </div>
        )
    }
}

export default FriendFeed;