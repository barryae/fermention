import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3)
  },
  title: {
    flexGrow: 1,
    margin: 10,
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    float: 'left'
  },
  avatar: {
    margin: 10,
    float: 'left'
  },

  link: {
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: ".75rem",
    },
    textDecoration: "none"
  },

  appitems: {
    [theme.breakpoints.down('xs')]: {
      margin: "0 auto",
    },
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (

    <AppBar position="static">
      <Toolbar className={classes.appitems}>
        {props.loggedIn ? <>
          <Avatar
            variant="square"
            src="../logo192.png"
            className={classes.avatar}
          />
          <Typography variant="h4" className={classes.title}>
            Fermention
          </Typography> <Button>
            <Link color="inherit" to="/home" className={classes.link}>
              Home
            </Link>
          </Button>
          <Button>
            <Link color="inherit" to="/newbrew" className={classes.link}>
              New Brew
            </Link>
          </Button>
          <Button>
            <Link color="inherit" to="/profile" className={classes.link}>Profile</Link>
          </Button></>
          :
          <div style={{ margin: '0 auto' }}>
            <Avatar
              variant="square"
              src="../logo192.png"
              className={classes.avatar}
            />
            <Typography variant="h4" className={classes.title}>
              Fermention
          </Typography></div>}
      </Toolbar>
    </AppBar>

  );
};

export default NavBar;
