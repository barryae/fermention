import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
            src="/broken-image.jpg"
            className={classes.avatar}
          />
          <Typography variant="h4" className={classes.title}>
            Fermention
          </Typography>
          <Button color="inherit">Log In</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
