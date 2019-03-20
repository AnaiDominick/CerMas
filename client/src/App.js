import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Example from "./pages/Example";
import ExampleForm from "./pages/ExampleForm";
import Home from "./pages/Home";
import User from "./pages/UserIndex";
import Nav from "./components/Nav";
import Foot from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/signupForm.js";
import Login from "./pages/loginForm.js";
import UserIndex from "./components/UserIndex";
import "./App.css";


function App() {
  return (
    <div className="setup">
      <Router>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/example/:id" component={Example} />
            <Route exact path="/newexample" component={ExampleForm} />
            <Route exact path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/userIndex" component={UserIndex} />
            <Route component={NoMatch} />
          </Switch>
          <Foot />
        </>
      </Router>
    </div>
  );
}

export default App;
