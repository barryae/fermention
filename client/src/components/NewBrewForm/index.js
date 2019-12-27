import 'date-fns';
import React, { Component } from "react";
import { Button, TextField, Container, NativeSelect, FormControl, Input, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import API from "../../utils/API"
import "./style.css";

class NewBrewForm extends Component {

    //Sets state
    state = {
        title: "",
        category: "Other",
        description: "",
        ingredients: [],
        startTime: new Date(),
        endTime: new Date(),
        days: 0,
        hours: 0,
        mins: 0,
        picture: "",
        ingredient: "",
        amount: 1,
        units: "mL"
    }

    //Handles changes in input
    handleInputChange = event => {
        const { name, value, type } = event.target;

        this.setState({
            [name]: type === 'number' ? parseInt(value) : value
        });
    };

    //Handles changes in date
    handleDateChange = date => {
        this.setState({
            startTime: date
        });
    };

    //Deletes specific ingredient
    deleteIngredient = name => {
        let filteredArr = this.state.ingredients.filter(function (obj) {
            return obj.ingredient !== name;
        });

        this.setState({
            ingredients: filteredArr
        });
    };

    //Adds time from brew lenght to create end time
    calcEndDate = (days, hours, mins) => {
        let endTime = new Date();
        let startTime = this.state.startTime;
        endTime.setMinutes(startTime.getMinutes() + mins);
        endTime.setHours(endTime.getHours() + hours);
        endTime.setDate(endTime.getDate() + days);
        return endTime;
    }

    //Formats brew length
    calcBrewLength = (days, hours, mins) => {
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (mins < 10) {
            mins = "0" + mins;
        }
        let brewLength = `${days}:${hours}:${mins}:00`
        return brewLength;
    }

    //Adds new ingredient
    addIngredient = event => {
        event.preventDefault();
        let ingredients = this.state.ingredients;
        let unique = true;

        for (let i = 0; i < ingredients.length; i++) {
            if (this.state.ingredient.toLowerCase() === ingredients[i].ingredient.toLowerCase()) {
                unique = false;
            }
        }

        if (this.state.ingredient && unique) {
            let newIng = {
                ingredient: this.state.ingredient,
                amount: this.state.amount,
                units: this.state.units
            }
            this.setState({
                ingredient: "",
                amount: 1,
                units: "mL",
                ingredients: [...ingredients, newIng]
            });
        }
    }

    //Creates new brew
    handleSubmit = event => {
        event.preventDefault();
        const data = {
            title: this.state.title,
            category: this.state.category,
            ingredients: this.state.ingredients,
            description: this.state.description,
            startTime: this.state.startTime,
            endTime: this.calcEndDate(this.state.days, this.state.hours, this.state.mins),
            brewLength: this.calcBrewLength(this.state.days, this.state.hours, this.state.mins),
            picture: this.state.picture
        }
        this.setState({
            title: "",
            category: "Other",
            description: "",
            ingredients: [],
            startTime: new Date(),
            endTime: new Date(),
            days: 0,
            hours: 0,
            mins: 0,
            picture: "",
            ingredient: "",
            amount: 1,
            units: "mL"
        });
        if (this.state.title !== "") {
            console.log(data)
            API.createRecipe(data)
                .then(result => {
                    console.log(result)
                })
                .catch(err => console.log(err))
        }

    };

    //Renders form
    render() {
        return (
            <>
                <Container maxWidth="sm">
                    <FormControl
                        fullWidth={true}>
                        <h6 >Title:</h6>
                        <Input
                            value={this.state.title}
                            name="title"
                            onChange={this.handleInputChange} />
                        <FormHelperText >Required</FormHelperText>
                    </FormControl>

                    <FormControl
                        fullWidth={true}>
                        <h6>Category:</h6>
                        <NativeSelect value={this.state.category} name="category" onChange={this.handleInputChange}>
                            <option value={"Other"}>Other</option>
                            <option value={"Beer"}>Beer</option>
                            <option value={"Vinegar"}>Vinegar</option>
                            <option value={"Bread"}>Bread</option>
                            <option value={"Pickle"}>Pickle</option>
                            <option value={"Kombucha"}>Kombucha</option>
                            <option value={"Miso"}>Miso</option>
                            <option value={"Wine"}>Wine</option>
                            <option value={"Kimchi"}>Kimchi</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <h6>Ingredients:</h6>
                        <ul className="ingList">
                            {this.state.ingredients.map(item => (
                                <li className="ingListItem" key={item.ingredient}>
                                    {item.ingredient}: {item.amount}{item.units}
                                    <button id="ingBtn" onClick={() => this.deleteIngredient(item.ingredient)}>&times;</button>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <h5 className="subLabel">Name:</h5>
                            <input
                                value={this.state.ingredient}
                                id="ingName"
                                className="subInput"
                                name="ingredient"
                                onChange={this.handleInputChange}></input>
                            <br></br>
                            <h5 className="subLabel">Amount:</h5>
                            <input
                                value={this.state.amount}
                                id="ingAmount"
                                className="subInput"
                                type="number"
                                min={1}
                                placeholder={1}
                                name="amount"
                                onChange={this.handleInputChange}></input>
                            <br></br>
                            <h5 className="subLabel">Unit:</h5>
                            <NativeSelect
                                value={this.state.units}
                                className="subInput"
                                id="ingUnit"
                                name="units"
                                onChange={this.handleInputChange}>
                                <option value={"mL"}>mL</option>
                                <option value={"L"}>L</option>
                                <option value={"mg"}>mg</option>
                                <option value={"g"}>g</option>
                                <option value={"kg"}>kg</option>
                            </NativeSelect>
                            <br></br>
                            <button id="ingBtn" onClick={this.addIngredient}>+</button>
                        </div>
                    </FormControl>

                    <FormControl
                        fullWidth={true}>
                        <h6>Description:</h6>
                        <TextField
                            multiline
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                        />
                    </FormControl>


                    <FormControl>
                        <h6>Start Time:</h6>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                variant="inline"
                                format="MM/dd/yyyy"
                                onChange={this.handleDateChange}
                                value={this.state.startTime}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                variant="inline"
                                onChange={this.handleDateChange}
                                value={this.state.startTime}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>

                    <FormControl fullWidth={true}>
                        <h6>Brew Time:</h6>
                        <div>
                            <h5 className="subLabel">Days:</h5>
                            <input
                                className="subInput"
                                id="days"
                                type="number"
                                min={0}
                                name="days"
                                onChange={this.handleInputChange}
                                placeholder={0}
                                value={this.state.days}>
                            </input>

                            <br></br>
                            <h5 className="subLabel">Hours:</h5>
                            <input
                                className="subInput"
                                id="hours"
                                type="number"
                                min={0}
                                max={23}
                                name="hours"
                                value={this.state.hours}
                                onChange={this.handleInputChange}
                                placeholder={0}></input>
                            <br></br>
                            <h5 className="subLabel">Minutes:</h5>
                            <input
                                className="subInput"
                                id="hours"
                                type="number"
                                min={0}
                                max={59}
                                name="mins"
                                value={this.state.mins}
                                onChange={this.handleInputChange}
                                placeholder={0}></input>
                        </div>
                    </FormControl>

                    <FormControl>
                        <h6>Image:</h6>
                        <Button size="small" variant="contained" color="default" id="uploadBtn">
                            Upload</Button>
                    </FormControl>

                    <div id="wrapper">
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            id="createBtn"
                            onClick={this.handleSubmit}>
                            Create New Brew</Button>
                    </div>


                </Container>
            </>
        );
    }
}

export default NewBrewForm;
