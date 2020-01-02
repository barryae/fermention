import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NewBrew from "./pages/NewBrew";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import { Container } from "@material-ui/core";
import authenticatedAxios from "./utils/AuthenticatedAxios"
import UserContext from "./context/UserContext"
import ProtectedRoute from "./components/ProtectedRoute"

class App extends Component {
  state = {
    user: null
  }

  setUser = user => {
    this.setState({ user })
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      authenticatedAxios
        .get("/api/authenticate")
        .then(response => this.setUser(response.data))
    }
  }


  render() {
    const { user } = this.state;
    const setUser = this.setUser
    return (
      <>
        <Container>
          <Router>
            <UserContext.Provider
              value={{
                user: user,
                setUser: setUser
              }}
            >
              <NavBar />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/home" component={Home} />
              <ProtectedRoute exact path="/newbrew" component={NewBrew} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </UserContext.Provider>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;
