import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3)
  }
}));

const Card = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8}>
      <Paper className={classes.paper} variant="outlined" elevation={2}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
          <Grid item>
            <Avatar alt="User Picture Here">B</Avatar>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <img src="" alt="Brew Image Here" />
          </Grid>
          <Grid item>
            <Typography variant="body1">Ingredients:</Typography>
            <Typography variant="body1">Description:</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="body1">Timer goes here</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
