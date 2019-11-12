import React, { Component } from "react";
// import { connect } from 'react-redux';
import '../App.css';
import RenderedProfile from "../components/profile/renderedProfile.js";
import ProfileForm from "../components/profile/ProfileForm.js";
import Trophies from "./Trophies.js";
import postAPI from "../utils/postAPI";

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


// import API from "../utils/API";


class Profile extends Component {

    // Profile page essentially. This is where you can access your sessions history (delete, comment, whatever) and edit your info.
    state = {
        username: null,
        comment: "",
        users: [],
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
        this.getUsername();
        this.getCommentFromUser();
    }

    gettingPosts = () => {
        postAPI.findUsers().then(
            (res) => {
                console.log(res);
                this.setState({
                    users: res.data, title: "", user: "", date: ""
                });
                this.decideColor();
            }

        ).catch(err => console.log(err))
    };

    decideColor = () => {
        const theUsers = this.state.users;

        for (let i = 0; i < theUsers.length; i++) {

            if (this.props.name === theUsers[i].fullname) {
                this.setState({ uTrophs: theUsers[i].trophies });
            };

            for (let i = 0; i < this.state.uTrophs.length; i++) {
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
        }
    }

    getUsername = () => {
        let user = sessionStorage.getItem('username');
        this.setState({ username: user });
    }

    getCommentFromUser = (e) => {
        if (e) {
            let comment = e.target.value;
            this.setState({ comment: comment });
        }
    }




    render() {
        return (
            <div>
                < div className="profileFormHolder">
                    {/* <ProfileForm /> */}
                    <div className="row justify-content-center">
                        < RenderedProfile name={this.props.name} image={this.props.image} email={this.props.email} pizza={this.state.pizzaIMG} selfie={this.state.selfieIMG} gym={this.state.gymIMG} camping={this.state.campingIMG} movie={this.state.movieIMG} trip={this.state.tripIMG} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Profile;
