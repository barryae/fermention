import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class LoginForm extends Component {
  state = {
    userName: "",
    password: ""
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  // handleButton = event =>{
  //   event.preventDefault();
  //   makeUser();
  // }

  render() {
    const { userName, password } = this.state;
    const values = { userName, password };

    return (
      <MuiThemeProvider>
        <TextField
          hintText="Enter User Name"
          label="User Name"
          variant="outlined"
          onChange={this.handleChange("userName")}
          defaultValue={values.userName}
        />
        <br />
        <TextField
          hintText="Enter Password"
          variant="outlined"
          label="Password"
          type="password"
          onChange={this.handleChange("password")}
          defaultValue={values.password}
        />
        <br />
        <Button
          label="Sign In"
          primary={true}
          style={styles.button}
          onClick={this.handleButton}
        >
          Sign In
        </Button>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default LoginForm;
