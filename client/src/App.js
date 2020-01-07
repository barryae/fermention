import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile"
import NewBrew from "./pages/NewBrew";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import { Container } from "@material-ui/core";
import UserContext from "./context/UserContext"
import ProtectedRoute from "./components/ProtectedRoute"
import API from "./utils/API"

class App extends Component {
  state = {
    user: null
  }

  setUser = user => {
    this.setState({ user: user })
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      console.log(token)
      API.getUser()
        .then(response => {
          console.log(response)
          this.setUser(response.data)
        })
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
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signup" component={SignUp} />
            </UserContext.Provider>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;
