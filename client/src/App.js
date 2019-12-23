import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NewBrew from "./pages/NewBrew";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar/Navbar";
import { Container } from "@material-ui/core";


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/newbrew" component={NewBrew} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;
