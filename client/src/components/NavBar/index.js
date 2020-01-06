import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3)
  },
  title: {
    flexGrow: 1,
    margin: 10
  },
  avatar: {
    marginRight: 15
  },

  link: {
    color: 'white'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            variant="square"
            src="../logo192.png"
            className={classes.avatar}
          />
          <Typography variant="h4" className={classes.title}>
            Fermention
          </Typography>
          <Button>
            <Link color="inherit" href="/home" className={classes.link}>
              Home
            </Link>
          </Button>
          <Button>
            <Link color="inherit" href="/newbrew" className={classes.link}>
              New Brew
            </Link>
          </Button>
          <Button>
            <Link color="inherit" href="/profile" className={classes.link}>Profile</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
