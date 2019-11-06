import React, {Component} from "react";
import userAPI from "../../utils/userAPI";
import "../../pages/trophies.css";
// back of card

class TrophyEmailForm extends Component {

  state = {
  //  email: ""
  //   friendEmail: "",
  //   description: "",
  //   photoURL: ""
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // const friendEmail = event.target.friendEmail;
    // const description = event.target.description;
    // const photoURL = event.target.photoURL;
    this.setState({value: event.target.value});
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  
      alert(`Hello ${this.state.email}
      ${this.state.friendEmail}
      ${this.state.description}
      ${this.state.photoURL}`
)

    this.setState({
      email: "",
      friendEmail: "",
      description: "",
      photoURL: ""
    });

  };

  updateUsers = (userData) => {
    userAPI.updateUsers(userData).then(
      (res) => {
        console.log(res);
      }
    ).catch(err => console.log(err))
  }


// onSubmit = (e) => {
//   e.preventDefault();
//   alert(this.props.name)

//   this.updateUsers(this.props.name)
// }



  render () {
    return (
      <div class="col">
      <div>
      <h1>Details</h1>
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
    <label for="exampleInputEmail1">Your Friend's Email</label>
    <input 
      value={this.state.friendEmail}
      name="friendEmail"
      onChange={this.handleInputChange}
      type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your friend's email with anyone else.</small>
  </div>

     <div class="form-group">
    <label for="description">Description</label>
    <input  value={this.state.description}
      name="description"
      onChange={this.handleInputChange}
    type="text" class="form-control" id="description" placeholder="In one word, how was it!?"/>
  </div>
   <div class="form-group">
    <label for="photoURL">Photo URL</label>
    <input 
     value={this.state.photoURL}
     onChange={this.handleInputChange}
     name="photoURL"
     type="text" class="form-control" id="photoURL" placeholder="Link to your photo"/>
  </div>
  <button name="Got Pizza" type="submit" class="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
</form>
</div>
</div>
    )
  }
}
        
export default TrophyEmailForm;