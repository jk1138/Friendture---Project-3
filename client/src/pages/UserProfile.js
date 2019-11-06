import React, { Component } from "react";
// import { connect } from 'react-redux';
import RenderedProfile from "../components/profile/renderedProfile.js";
import ProfileForm from "../components/profile/ProfileForm.js";
import Trophies from "./Trophies.js"

// import API from "../utils/API";


class Profile extends Component {

    // Profile page essentially. This is where you can access your sessions history (delete, comment, whatever) and edit your info.
    state = {
        username: null,
        comment: "",

    }

    componentDidMount() {
        this.getUsername();
        this.getCommentFromUser();
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


    render() {
        return (
            <div>
                < div className="profileFormHolder">
                    {/* <ProfileForm /> */}
                    <div className="row justify-content-center">
                        < RenderedProfile name={this.props.name} image={this.props.image}/>
                    </div>
            
                </div>
            </div>
        )
    }
}

export default Profile;
