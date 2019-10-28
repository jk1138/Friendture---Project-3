import React from "react";

import FriendFeed from "./pages/Feed-Friendlist";
import TrophyCard from "./components/TrophyList";

// import Homepage from "./pages/Homepage"
// import Nav from "./components/Navbar";

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
        <TrophyCard />
      </div>
    // </Router>
  );
}

export default App;
