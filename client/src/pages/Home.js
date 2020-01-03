import React, { Component } from "react";
import API from "../utils/API"
import Card from "../components/Card"
import { Grid, InputLabel, NativeSelect, FormControl, Input, FormHelperText } from '@material-ui/core';


class Home extends Component {
    state = {
        database: [],
        recipes: [],
        category: "All",
        search: "",
        brewStatus: "All"
    }

    componentDidMount() {
        this.loadRecipes();
    }

    //Filters by chosen category
    categoryFilter() {
        if (this.state.category !== "All") {
            const result = this.state.database.filter(recipe => recipe.category === this.state.category);
            this.setState({ recipes: result })
        } else {
            this.setState({ recipes: this.state.database })
        }
    }

    //Filters by brew status
    statusFilter() {

        if (this.state.brewStatus === "Finished") {
            const result = this.state.database.filter(recipe => new Date(recipe.endTime) < new Date());
            this.setState({ recipes: result })
        } else if (this.state.brewStatus === "Brewing") {

            const result = this.state.database.filter(recipe => new Date(recipe.endTime) > new Date());
            this.setState({ recipes: result })

        } else if (this.state.brewStatus === "All") {
            this.setState({ recipes: this.state.database })
        }
    }

    //Searches array for ingredients
    ingredientSearch() {
        const searchTerm = this.state.search;
        if (searchTerm !== "") {
            const result = this.state.database.filter(
                function (recipe) {
                    if (recipe.ingredients.length !== 0) {
                        for (let i = 0; i < recipe.ingredients.length; i++) {
                            if (recipe.ingredients[i].ingredient.toLowerCase() === searchTerm.toLowerCase()) {
                                return recipe.ingredients[i].ingredient.toLowerCase() === searchTerm.toLowerCase()
                            };
                        }
                        return null;
                    } else {
                        return null;
                    }
                });
            this.setState({ recipes: result })
        } else {
            this.setState({ recipes: this.state.database })
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => {
            if (name === "category") {
                this.ingredientSearch();
            }
            else if (name === "search") {
                this.ingredientSearch();
            }
            else if (name === "brewStatus") {
                this.ingredientSearch();
            }
        });
    };

    loadRecipes = () => {
        API.getAllRecipes()
            .then(res =>
                this.setState({
                    database: res.data,
                    recipes: res.data
                }))
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12} sm={8}>
                    <FormControl
                        fullWidth={true}>
                        <InputLabel>Search Ingredients</InputLabel>
                        <Input
                            value={this.state.search}
                            name="search"
                            onChange={this.handleInputChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        fullWidth={true}>
                        <NativeSelect value={this.state.category} name="category" onChange={this.handleInputChange}>
                            <option value={"All"}>All</option>
                            <option value={"Beer"}>Beer</option>
                            <option value={"Vinegar"}>Vinegar</option>
                            <option value={"Bread"}>Bread</option>
                            <option value={"Pickle"}>Pickle</option>
                            <option value={"Kombucha"}>Kombucha</option>
                            <option value={"Miso"}>Miso</option>
                            <option value={"Wine"}>Wine</option>
                            <option value={"Kimchi"}>Kimchi</option>
                            <option value={"Other"}>Other</option>
                        </NativeSelect>
                        <FormHelperText>Filter by Category</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        fullWidth={true}>
                        <NativeSelect value={this.state.status} name="brewStatus" onChange={this.handleInputChange}>
                            <option value={"All"}>All</option>
                            <option value={"Finished"}>Finished</option>
                            <option value={"Brewing"}>Currently Brewing</option>

                        </NativeSelect>
                        <FormHelperText>Filter by Brewing Status</FormHelperText>
                    </FormControl>
                </Grid>
                {this.state.recipes.length > 0 ? (
                    <>
                        {this.state.recipes.map(recipe => (


                            <Card key={recipe._id}
                                id={recipe._id}
                                title={recipe.title}
                                description={recipe.description}
                                user={recipe.user}
                                picture={recipe.picture}
                                ingredients={recipe.ingredients}
                                endTime={recipe.endTime}
                                brewLength={recipe.brewLength}></Card>

                        ))}
                    </>
                ) : (
                        <Grid item xs={12} sm={8} ><h3>No Results to Display</h3></Grid>
                    )
                }
            </Grid>
        )
    };
}

export default Home;