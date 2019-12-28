import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

const Card = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column-reverse" justify="center" spacing={2}>
        <Grid item>
          <Paper className={classes.paper} variant="outlined" elevation={2}>
            <Grid contianer direction="row">
              <Grid item>
                <Typography variant="h3">Title Name</Typography>
              </Grid>
              <Grid item>
                <Avatar alt="User Picture Here">B</Avatar>
              </Grid>
            </Grid>
            <Grid contianer direction="row">
              <Grid item>
                <img src="" alt="Brew Image Here" />
              </Grid>
              <Grid item>
                <Typography variant="p">Ingredients:</Typography>
                <Typography variant="p">Description:</Typography>
              </Grid>
            </Grid>
            <Grid contianer direction="row">
              <Grid item>
                <Typography variant="h5">Timer goes here</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
