import React, {Component} from "react";
import userAPI from "../../utils/userAPI";

class ProfileForm extends Component {

  updateUsers = (userData) => {
    userAPI.updateUsers(userData).then(
      (res) => {
        console.log(res);
      }
    ).catch(err => console.log(err))
  }

onSubmit = (e) => {
  e.preventDefault();
  
}
  render () {
    return (
      <div class="container">
      <div>
      <h1>Profile</h1>
    <form>
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="Name" class="form-control" id="NameInput" aria-describedby="NameHelp" placeholder="Name" />
    </div>    
    <div class="form-group">
      <label for="Birthday">Birthday</label>
      <input type="Birthday" class="form-control" id="BirthdayInput" aria-describedby="BirthdayHelp" placeholder="Birthday" />
    </div>   
    <div class="form-group">
      <label for="Email">Your Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   </div>

    <div class="form-group">
      <label for="AboutMe">About Me</label>
      <input type="text" class="form-control" id="AboutMe" placeholder="Tell us a little bit about yourself. Describe your interests and hobbies... "/>
    </div>
   <div class="form-group">
    <label for="photoURL">Photo URL</label>
    <input type="text" class="form-control" id="photoURL" placeholder="Link to your photo"/>
  </div>
  <button name="Got Pizza" type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
</form>
</div>
</div>
    )
  }
}
        
export default ProfileForm;
