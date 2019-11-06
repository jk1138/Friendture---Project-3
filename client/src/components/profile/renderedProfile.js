import React, {Component} from "react";
import userAPI from "../../utils/userAPI";

class renderedProfile extends Component {

  render () {
    return (
        <div>

            <div className="jumbotron justify-content-center ProfileBackground">
                <h1>Welcome to Your Profile</h1>
            </div>
                <div class="media">
                    <img src="..." class="align-self-center mr-3" alt="..."></img>
                        <div class="media-body">
                            <h5></h5>
                            <p></p>
                        </div>
                </div>

         </div>

    )
  }
}
        
export default renderedProfile;
