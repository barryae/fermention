import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3)
  }
}));

<<<<<<< HEAD
const Card = (props) => {
=======
const Card = props => {
>>>>>>> 95ce0ef6246ea85a1c5b66432d41a4931b718220
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8} key={props._id}>
      <Paper className={classes.paper} variant="outlined" elevation={2}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{props.user}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <img src="" alt="Brew Image Here" />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Ingredients: {props.ingredients}
            </Typography>
            <Typography variant="body1">
              Description: {props.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="body1">{props.brewLength}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
