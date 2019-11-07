import React, { Component } from "react";
import userAPI from "../../utils/userAPI";
import "../../pages/trophies.css";
import App from "../../App";
// import postController from "../../../controllers"
// back of card

class TrophyEmailForm extends Component {

  state = {
  email: "",
    title: "",
    description: "",
    photoURL: ""
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // const friendEmail = event.target.friendEmail;
    // const description = event.target.description;
    // const photoURL = event.target.photoURL;
    this.setState({ value: event.target.value });
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  updateUsers = (email, postData) => {
    userAPI.updateUsers(email, postData).then(
      (res) => {
        console.log("Hello from the form update")
        console.log(res);
      }
    ).catch(err => console.log(err))
  };
  
  updateUsersT = (email, postData) => {
    userAPI.updateUsersT(email, postData).then(
      (res) => {
        console.log("Hello from the trophy update")
        console.log(res);
      }
    ).catch(err => console.log(err))
  };
  

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

   
    alert(`Hello ${this.state.email}
      ${this.state.title}
      ${this.state.description}
      ${this.state.photoURL}`
    );

    let yourEmail = this.state.email;
    let title = this.state.title;
    let description = this.state.description;
    let photo = this.state.photoURL; 

    let trophy = document.getElementById("head-du-form").value;
    


    this.updateUsers(
    yourEmail,{email: yourEmail, title: title, body: description, pic: photo, date: Date.now}
    );
    this.updateUsersT(
      yourEmail,{trophy}
    );
  };


//   onSubmit = (e) => {
//     e.preventDefault();

// alert(this.props.name)


// this.updateUsers(this.props.name)
//   }



  render() {
    return (
      <div class="col">
        <div>
          <h1 id="head-du-form">{this.props.troph}</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Your Email</label>
              <input
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Post Title</label>
              <input
                value={this.state.title}
                name="title"
                onChange={this.handleInputChange}
                type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <input value={this.state.description}
                name="description"
                onChange={this.handleInputChange}
                type="text" class="form-control" id="description" placeholder="In one word, how was it!?" />
            </div>
            <div class="form-group">
              <label for="photoURL">Photo URL</label>
              <input
                value={this.state.photoURL}
                onChange={this.handleInputChange}
                name="photoURL"
                type="text" class="form-control" id="photoURL" placeholder="Link to your photo" />
            </div>
            <button name="Got Pizza" type="submit" class="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
}
}

export default TrophyEmailForm;