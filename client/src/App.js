import React from "react";
import Homepage from "./pages/Homepage"
import CreateAccountForm from "./components/Form"


function App() {
  return (
    // <Router>
      <div>
        <CreateAccountForm/>
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
