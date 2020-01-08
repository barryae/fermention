import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Link, Button } from "@material-ui/core";
import Auth from "../../utils/Auth";
import UserContext from "../../context/UserContext";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  image: {
    margin: theme.spacing(0),
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(0),
    float: 'left'
  },

  logOutBtn: {
    float: 'right',
  }

}));

const ProfileBio = props => {
  const { setUser } = useContext(UserContext);
  const classes = useStyles();
  let history = useHistory();
  return (

    <Paper className={classes.paper} variant="outlined" elevation={2} style={{ width: '100%' }}>

      <Typography variant="h5">{props.user ? props.user : "User"}'s Brews</Typography>
      <Button color="secondary" variant="contained" className={classes.logOutBtn}>
        <Link color="inherit" onClick={() => {
          Auth
            .logOut(() => {
              setUser(null);
              history.push('/');
            })
        }}
          to='/'
          className={classes.link}>Logout</Link>
      </Button>

      {/* <Grid item xs={12} sm={12}>
            <Typography variant="body1">
              <b>Bio:&nbsp;</b>
              {props.description ? props.description : "No Bio"}
            </Typography>
          </Grid>  */}

    </Paper>

  );
};

export default ProfileBio;
