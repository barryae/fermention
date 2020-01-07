import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";
import Timer from "../Timer";

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

}));

const Card = props => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} key={props.id} spacing={2}>
      <Paper className={classes.paper} variant="outlined" elevation={2}>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">{props.title} by {props.user ? props.user : "Anonymous User"} </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <img
              className={classes.image}
              src={
                props.picture !== ""
                  ? props.picture
                  : "./images/fermention-default.jpg"
              }
              style={{ width: "100%" }}
              alt="User Brew"
            />
          </Grid>

          <Grid item xs={12} sm={6}>

            <Typography variant="body1">
              <b>Category:&nbsp;</b>
              {props.category}
            </Typography>

            <Typography variant="body1"><b>Ingredients:</b> </Typography>
            <ul>{props.ingredients.length > 0
              ? props.ingredients.map(ingredient => (
                <li key={ingredient.ingredient}>
                  {ingredient.ingredient}&nbsp;{ingredient.amount}
                  {ingredient.units}
                </li>
              ))
              : <p>(None Listed)</p>}</ul>

            <Typography variant="body1">
              <b>Description:&nbsp;</b>
              {props.description ? props.description : "(Not Provided)"}
            </Typography>
          </Grid>


          <Grid item xs={12}>
            <Typography variant="body1">
              <b>Total Brew Time:</b> {props.brewLength}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">
              <b>Brewing Status:</b> <Timer endTime={props.endTime}></Timer>
            </Typography>
          </Grid>
        </Grid>

      </Paper>
    </Grid>
  );
};

export default Card;
