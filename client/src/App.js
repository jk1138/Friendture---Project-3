import React from "react";
import Books from "../temp-src/pages/Books";
import Detail from "../temp-src/pages/Detail";
import NoMatch from "../temp-src/pages/NoMatch";
import Nav from "../temp-src/components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
