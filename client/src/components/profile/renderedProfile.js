import React, { Component } from "react";
import userAPI from "../../utils/userAPI";
import Trophy from "../../pages/Trophies";

class renderedProfile extends Component {

    render() {
        return (
            <div>

                <div className="jumbotron justify-content-center ProfileBackground">
                    <h1>Welcome to Your Profile</h1>
                </div>
                <div class="media row justify-content-around">
                    <img src="..." class="align-self-center mr-3" alt="..."></img>
                    <div className="col-md-2">
                        <h4>Trohphies</h4>
                        <Trophy />
                    </div>
                    <div class="media-body col-md-8">
                        <h5>{this.props.name}</h5>
                        <img src={this.props.image} className="profile-img" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>


            </div>

        )
    }
}

export default renderedProfile;