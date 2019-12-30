import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";
import Timer from "../Timer"
import { PromiseProvider } from "mongoose";

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
    <Grid item xs={12} sm={8} key={props.id}>
      <Paper className={classes.paper} variant="outlined" elevation={2}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">&nbsp;by {props.user ? props.user : "Anonymous User"}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <img src={props.picture !== "" ? props.picture : "./images/fermention-default.jpg"} style={{ width: '200px' }} alt="User Brew" />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Ingredients:</Typography>{props.ingredients.length > 0 ? (props.ingredients.map(ingredient => (
                <p key={ingredient.ingredient}>
                  {ingredient.ingredient}&nbsp;{ingredient.amount}{ingredient.units}
                </p>
              ))) : ("(None Listed)")}

            <Typography variant="body1">
              Description: {props.description ? props.description : "(Not Provided)"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="body1">Total Brew Time: {props.brewLength}</Typography>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <Typography variant="body1">Brewing Status: <Timer endTime={props.endTime}></Timer></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
