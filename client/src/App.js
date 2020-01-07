import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import NewBrew from "./pages/NewBrew";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { Container } from "@material-ui/core";
import UserContext from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import API from "./utils/API";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import NavBar from "./components/NavBar";
import Auth from "./utils/Auth";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#55370f',
    },

  },
});

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
      API.getUser()
        .then(response => {
          console.log(response)
          this.setUser(response.data)
        })
    }
  }


  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    let loggedIn = Auth.isLoggedIn();
    return (
      <>
        <ThemeProvider theme={theme}>
          <Container>
            <Router>
              <NavBar loggedIn={loggedIn} />
              <UserContext.Provider
                value={{
                  user: user,
                  setUser: setUser
                }}
              >
                <ProtectedRoute exact path="/" component={Home} />
                <ProtectedRoute exact path="/home" component={Home} />
                <ProtectedRoute exact path="/newbrew" component={NewBrew} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
              </UserContext.Provider>
            </Router>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
