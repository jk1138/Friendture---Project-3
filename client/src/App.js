// import React from "react";
// import Homepage from "./pages/Homepage"
// // import Nav from "./components/Navbar";
// // import CreateAccountForm from "./components/Form"
// // import SubmitButton from "./components/Button"


// function App() {
//   return (
//     // <Router>
//       <div>
//         <Homepage />
//         {/* <Nav /> */}
//         {/* <Switch>
//           <Route exact path="/" component={Books} />
//           <Route exact path="/books" component={Books} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch> */}
//       </div>
//     // </Router>
//   );
// }

// export default App;

import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class App extends React.Component {
  
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
  
    return (


   <div>
     <Router>
     <div>
       <Navbar/>
       </div>
     </Router>
      <div className="App">
        <header className="App-header">
    
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {
            user 
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
      </div>
    );
}
}

// export default App;
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
