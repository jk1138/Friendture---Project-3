import React, { Component } from "react";
// import Nav from "../components/Navbar/index.js";
import postAPI from "../utils/postAPI.js";
import Trophy from "../pages/Trophies.js";
import data from "../utils/trophies.json";
import '../App.css';

import image1 from "../utils/images/gotPizzaTrophy.png";
import image2 from "../utils/images/selfieTrophy.png";
import image3 from "../utils/images/gymTrophy.png";
import image4 from "../utils/images/campingTrophy.png";
import image5 from "../utils/images/moviesTrophy.png";
import image6 from "../utils/images/roadTripTrophy.png";
import image1a from "../utils/images/greyPizzaTrophy.png";
import image2a from "../utils/images/greySelfieTrophy.png";
import image3a from "../utils/images/greyGymTrophy.png";
import image4a from "../utils/images/greyCampingTrophy.png";
import image5a from "../utils/images/greyMovieTrophy.png";
import image6a from "../utils/images/greyRoadTripTrophy.png";

class FriendFeed extends Component {

    state = {
        users: [],
        title: "",
        user: "",
        trophiesJSON: data,
        uTrophs: [],

        pizzaIMG: image1a,
        selfieIMG: image2a,
        gymIMG: image3a,
        campingIMG: image4a,
        movieIMG: image5a,
        tripIMG: image6a
    }

    componentDidMount() {
        this.gettingPosts();
        

    }

    gettingPosts = () => {
        postAPI.findUsers().then(
            (res) => {
                console.log(res);
                this.setState({
                    users: res.data, title: "", user: "", date: ""
                });
                this.renderPosts();
            }

        ).catch(err => console.log(err))
    };

    gettingFriends = () => {

    };

    renderPosts = () => {

        const theUsers = this.state.users;

        const theFeed = document.getElementById("theFeed");

        for (let i = 0; i < theUsers.length; i++) {

            let userPosts = theUsers[i].posts;
            let user = theUsers[i].fullname;

            if(this.props.name === theUsers[i].fullname){
                this.setState({uTrophs: theUsers[i].trophies});
            };

            for(let i = 0; i < this.state.uTrophs.length; i++){
                if (this.state.uTrophs[i] === "pizza") {
                    this.setState({ pizzaIMG: image1 });
                  } else if (this.state.uTrophs[i] === "selfie") {
                    this.setState({ selfieIMG: image2 });
                  } else if (this.state.uTrophs[i] === "gym") {
                    this.setState({ gymIMG: image3 });
                  } else if (this.state.uTrophs[i] === "camping") {
                    this.setState({ campingIMG: image4 });
                  } else if (this.state.uTrophs[i] === "movie") {
                    this.setState({ movieIMG: image5 });
                  } else if (this.state.uTrophs[i] === "trip") {
                    this.setState({ tripIMG: image6 });
                  }
            }
            

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
                                <Trophy email={this.props.email} pizza={this.state.pizzaIMG} selfie={this.state.selfieIMG} gym={this.state.gymIMG} camping={this.state.campingIMG} movie={this.state.movieIMG} trip={this.state.tripIMG}/>
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