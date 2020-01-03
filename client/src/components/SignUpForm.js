import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import API from "../utils/API";
import Auth from "../utils/Auth";
import { de } from "date-fns/locale";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  errors: {
    fontWeight: "bolder",
    color: "red"
  }
}));

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

function SignUp(props) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = e => {
    const { name, value } = e.target;
    const newFieldValues = { ...formValues, [name]: value };
    setFormValues(newFieldValues);

    const newFormErrors = { ...formErrors };

    switch (name) {
      case "username":
        newFormErrors.username =
          value.length < 3 ? "minimum of 3 characters required" : "";
        break;
      case "password":
        newFormErrors.password =
          value.length < 6 ? "minimum of 6 characters required" : "";
        break;
      case "confirmPassword":
        newFormErrors.confirmPassword =
          formValues.password !== value ? "Must match Password" : "";
        break;
      default:
        break;
    }
    setFormErrors(newFormErrors);
  };

  const user = useContext(UserContext);

  const submitHandler = e => {
    e.preventDefault();
    const { username, password, confirmPassword } = formValues;
    if (formValid(formErrors)) {
      if (username && password === confirmPassword) {
        const data = {
          username: username,
          password: password
        };
        API.signup(data, response => {
          console.log(response);
        }).then(
          Auth.logIn(username, password, response => {
            user.setUser(response);
            props.history.push("/");
          })
        );
      }
    }
  };

  const classes = useStyles();

  console.log(formErrors);
  console.log(formValues);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                noValidate
                autoFocus
                value={formValues.username}
                onChange={changeHandler}
              />
              {formErrors.username.length > 0 && (
                <span className={classes.errors}>{formErrors.username}</span>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                noValidate
                autoComplete="current-password"
                value={formValues.password}
                onChange={changeHandler}
              />
              {formErrors.password.length > 0 && (
                <span className={classes.errors}>{formErrors.password}</span>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                noValidate
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={formValues.confirmPassword}
                onChange={changeHandler}
              />
              {formErrors.confirmPassword.length > 0 && (
                <span className={classes.errors}>
                  {formErrors.confirmPassword}
                </span>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp);
