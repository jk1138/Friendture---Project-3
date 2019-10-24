import React from "react";
import Homepage from "./pages/Homepage"
import Nav from "./components/Navbar";
// import CreateAccountForm from "./components/Form"
// import SubmitButton from "./components/Button"


function App() {
  return (
    // <Router>
      <div>
        <Nav />
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
