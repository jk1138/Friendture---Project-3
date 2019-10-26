import React from "react";
import FriendFeed from "./pages/Feed-Friendlist";
// import CreateAccountForm from "./components/Form"
// import SubmitButton from "./components/Button"


function App() {
  return (
    // <Router>
      <div>
        <FriendFeed/>
        {/* <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch> */}
      </div>
    // </Router>
  );
}

export default App;
