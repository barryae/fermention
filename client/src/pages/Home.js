import React, { Component } from "react";
import { List, ListItem } from "../components/List"
import API from "../utils/API"


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
            <div>
                <h1>Here is the home page where the feed is!</h1>
                {this.state.recipes.length ? (
                    <List>
                        {this.state.recipes.map(recipe => (
                            <ListItem key={recipe._id}>
                                <p>
                                    <strong>
                                        {recipe.title} by {recipe.user ? recipe.user : "Unknown User"}
                                    </strong>
                                </p>
                                <div>
                                    {recipe.description}
                                    <p>
                                        <strong>Ingredients:</strong>
                                    </p>
                                    {recipe.ingredients.map(ingredient => (
                                        <p>
                                            {ingredient.ingredient}{ingredient.amount}{ingredient.units}
                                        </p>
                                    ))}
                                    <p>
                                        <strong>Date When Complete:</strong>
                                    </p>
                                    <p>
                                        {recipe.endTime < Date.now ? recipe.endTime : "Finished"}
                                    </p>
                                    <p>
                                        <strong>Total Brew Time:</strong>
                                    </p>
                                    <p>
                                        {recipe.brewLength}
                                    </p>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )
                }
            </div>
        )
    };
}

export default Home;