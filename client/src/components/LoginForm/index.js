import React, { Component } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Auth from "../../utils/Auth"
import { withRouter } from "react-router-dom";
import UserContext from "../../context/UserContext";

export class LoginForm extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      Auth.logIn(username, password, (response) => {
        this.context.setUser(response);
        this.props.history.push("/");
      });
    }
  }

  render() {
    const { userName, password } = this.state;
    const values = { userName, password };

    return (
      <ThemeProvider>
        <form onSubmit={this.submitHandler}>
          <TextField
            hintText="Enter User Name"
            label="User Name"
            variant="outlined"
            onChange={this.handleChange}
            defaultValue={values.userName}
          />
          <TextField
            hintText="Enter Password"
            variant="outlined"
            label="Password"
            type="password"
            onChange={this.handleChange}
            defaultValue={values.password}
          />
          <Button
            label="Sign In"
            primary={true}
            style={styles.button}
            type="submit"
          >
            Sign In
        </Button>
        </form>
      </ThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default withRouter(LoginForm);
