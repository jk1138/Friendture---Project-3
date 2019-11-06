import React, { Component } from "react";
// import Nav from "../components/Navbar/index.js";
import postAPI from "../utils/postAPI.js";
import Trophy from "../pages/Trophies.js";
import data from "../utils/trophies.json";
import '../App.css';

class FriendFeed extends Component {

    state = {
        posts: [],
        title: "",
        user: "",
        trophiesJSON: data
    }

    componentDidMount() {
        this.gettingPosts();

    }

    gettingPosts = () => {
        postAPI.findUsers().then(
            (res) => {
                console.log(res);
                this.setState({
                    posts: res.data, title: "", user: "", date: ""
                });
                this.renderPosts();
            }

        ).catch(err => console.log(err))
    };

    gettingFriends = () => {

    };

    renderPosts = () => {
        console.log(this.state.posts);

        const thePosts = this.state.posts;

        const theFeed = document.getElementById("theFeed");

        for (let i = 0; i < thePosts.length; i++) {

            let userPosts = thePosts[i].posts;
            let user = thePosts[i].fullname;

            for (let j = 0; j < userPosts.length; j++) {

                const newCard = document.createElement("div");
                newCard.setAttribute("class", "card");
                const cardBody = document.createElement("div");
                cardBody.setAttribute("class", "card-body");
                const cardTitle = document.createElement("h5");
                cardTitle.setAttribute("class", "card-title");
                cardTitle.textContent = (userPosts[j].title);
                const cardText = document.createElement("p");
                cardText.setAttribute("class", "card-text");
                cardText.textContent = (userPosts[j].body);
                const cardFooter = document.createElement("div");
                cardFooter.setAttribute("class", "card-footer text-muted");
                cardFooter.textContent = (userPosts[j].user + " on " + userPosts[j].date);

                if (userPosts[j].pic) {
                    const cardPic = document.createElement("img");
                    cardPic.setAttribute("class", "card-img-top");
                    cardPic.setAttribute("src", userPosts[j].pic);
                    newCard.appendChild(cardPic)
                };

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardFooter);

                newCard.appendChild(cardBody);

                theFeed.appendChild(newCard);
            };

            const friendLine = document.createElement("div");
            friendLine.setAttribute("class", "card");
            const friendSpan = document.createElement("span");
            const friendButton = document.createElement("button");
            friendButton.setAttribute("class", "btn btn-primary");
            const space = "    ";
            friendButton.innerText = space;
            friendSpan.appendChild(friendButton);
            friendLine.appendChild(friendSpan);
            friendLine.textContent = user;
            friendLine.appendChild(friendSpan);




            const list = document.getElementById("friend-list");
            list.appendChild(friendLine);


        }
    };

    render() {
        return (
            <div>
                {/* <Nav /> */}

                <div className="jumbotron justify-content-center feedBackground">
                    <h1>Feed</h1>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <h3>Have you done these recently?</h3>
                            <div class="row justify-content-center">
                                <Trophy email={this.props.email}/>
                            </div>
                        </div>

                        <div className="col-md-6" id="theFeed"><h2>What's Happening on Friendture:</h2></div>

                        <div className="col-md-3" id="friend-list">
                            <div>
                                <h3>Hello, {this.props.name}</h3>
                                {/* <p>Email: {this.props.email}</p> */}
                                <img src={this.props.image} className="profile-img" />
                            </div>
                            <br />
                            <h3>Your Friendslist</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendFeed;