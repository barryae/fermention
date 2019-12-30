import React, { Component } from "react";
import API from "../utils/API"
import Card from "../components/Card"
import { Grid } from "@material-ui/core";


class Home extends Component {
    state = {
        recipes: [],
        title: "",
        user: "",
        description: "",
        ingredients: [],
        picture: "",
        startTime: "",
        endTime: "",
        brewLength: ""
    }

    componentDidMount() {
        this.loadRecipes();
    }

    loadRecipes = () => {
        API.getAllRecipes()
            .then(res =>
                this.setState({
                    recipes: res.data,
                    title: "",
                    user: "",
                    description: "",
                    ingredients: [],
                    picture: "",
                    startTime: "",
                    endTime: "",
                    brewLength: ""
                }))
    }

    render() {
        return (
            <Grid container justify="center">
                <h1>Here is the home page where the feed is!</h1>
                {this.state.recipes.length ? (
                    <>
                        {this.state.recipes.map(recipe => (


                            <Card key={recipe._id}
                                title={recipe.title}
                                description={recipe.description}
                                user={recipe.user}
                                ingredients={recipe.ingredients}
                                endTime={recipe.endTime}
                                brewLength={recipe.brewLength}></Card>

                        ))}
                    </>
                ) : (
                        <h3>No Results to Display</h3>
                    )
                }
            </Grid>
        )
    };
}

export default Home;