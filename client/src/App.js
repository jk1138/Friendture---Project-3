
import FriendFeed from "./pages/Feed-Friendlist";
import UserProfile from "./pages/UserProfile.js";

import React from 'react';
import Trophy from "./pages/Trophies";
// import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage/index.js";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import userAPI from "./utils/userAPI";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
class App extends React.Component {


  // const firebaseAppAuth = firebaseApp.auth();
  // const providers = {
  //   googleProvider: new firebase.auth.GoogleAuthProvider(),
  // };

  // componentDidMount(){
  //   this.realSignIn();
  // }
  state={
    userEmail: ""
  }


  savingUsers = (userData) => {
    userAPI.saveUsers(userData).then(
      (res) => {
        console.log(res);

      }
    ).catch(err => console.log(err))
  }

  realSignIn = () => {

    this.props.signInWithGoogle().then((res) => {
      console.log(res)
      const email = res.additionalUserInfo.profile.email;
      const fullName = res.additionalUserInfo.profile.name;

      const userData = {
        email: email,
        fullname: fullName
      };
      console.log(userData)


      if (res.additionalUserInfo.isNewUser === true) {
        this.savingUsers(userData)
      };
      this.setState({userEmail: email})

    })

  }


  gettingUsers = () => {
    userAPI.getUsers().then(
      (res) => {
        console.log(res);
      }
    ).catch(err => console.log(err))
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;


    return (
      <div>
        {/* <Router> */}
        <div>
          <Navbar />
        </div>
        <div>
          {/* <Trophy /> */}
        </div>
        {/* </Router> */}
        <div className="App">
          <header className="App-header">

            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {
              user

                ?

                <div id="mainPage">
                  <Router>
                    <div>
                      <Switch>
                        <Route exact path="/"  render={()=><FriendFeed name={user.displayName} image={user.photoURL} email={this.state.userEmail}/>} />
                        <Route exact path="/HomePage"  render={()=><FriendFeed name={user.displayName} image={user.photoURL}/>} />
                        <Route exact path="/myprofile" render={()=><UserProfile name={user.displayName} image={user.photoURL} email={this.state.userEmail}/>}/> 
                      </Switch>
                    </div>
                  </Router>
                </div>




                : <p>Please sign in.</p> 

            }
            {
              user

                ?

                <button onClick={signOut} href="/auth/google" class="button">
                  <div>
                    <span class="svgIcon t-popup-svg">
                      <svg
                        class="svgIcon-use"
                        width="25"
                        height="37"
                        viewBox="0 0 25 25"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                            fill="#34A853"
                          />
                          <path
                            d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                            fill="#EA4335"
                          />
                        </g>
                      </svg>
                    </span>
                    <span class="button-label">Sign Out</span>
                  </div>
                </button>

                :  <button onClick={this.realSignIn} href="/auth/google" class="button">


                  <div>

                    <span class="svgIcon t-popup-svg">
                      <svg
                        class="svgIcon-use"
                        width="25"
                        height="37"
                        viewBox="0 0 25 25"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                            fill="#34A853"
                          />
                          <path
                            d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                            fill="#EA4335"
                          />
                        </g>
                      </svg>
                    </span>
                    <span class="button-label">Sign in with Google</span>
                  </div>
                </button>
              
            }
          </header>
          <div><LandingPage /></div>
        </div>
  
      </div>

    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);


