import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Form from "../components/profile/ProfileForm.js";

// import API from "../utils/API";


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

    }

    getUsername() {
        let user = sessionStorage.getItem('username');
        this.setState({username: user});
    }

    getCommentFromUser = (e) => {
        if (e){
            let comment = e.target.value;
            this.setState({comment: comment});
        }
    }


    render () { 
        return (
            <div>
            <Navbar/>
            <div class= "container">
                < div className="profileHolder">
                    <Form/>
                </div>
            </div>
            </div>
        )
    }
}

export default Profile;