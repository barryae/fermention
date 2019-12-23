import 'date-fns';
import React, { Component } from "react";
import { Button, TextField, Container, NativeSelect, FormControl, Input, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import "./style.css";

class NewBrewForm extends Component {

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
        picture: ""
    }

    handleInputChange = event => {
        const { name, value, type } = event.target;

        this.setState({
            [name]: type === 'number' ? parseInt(value) : value
        });
    };

    handleDateChange = date => {
        this.setState({
            startTime: date
        });
    };

    calcEndDate = (days, hours, mins) => {
        let endTime = new Date();
        let startTime = this.state.startTime;
        endTime.setMinutes(startTime.getMinutes() + mins);
        endTime.setHours(endTime.getHours() + hours);
        endTime.setDate(endTime.getDate() + days);
        return endTime;
    }

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

    addIngredient = event => {
        event.preventDefault();
        alert("ingredient added!")
    }

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
        console.log(data)
    };

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
                        <NativeSelect name="category" onChange={this.handleInputChange}>
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
                        <div id="ingList"></div>
                        <div>
                            <h5 className="subLabel">Name:</h5>
                            <input id="ingName" className="subInput"></input>
                            <br></br>
                            <h5 className="subLabel">Amount:</h5>
                            <input id="ingAmount" className="subInput" type="number" min="1" placeholder="1"></input>
                            <br></br>
                            <h5 className="subLabel">Unit:</h5>
                            <NativeSelect className="subInput" id="ingUnit">
                                <option value={1}>mL</option>
                                <option value={2}>L</option>
                                <option value={3}>mg</option>
                                <option value={4}>g</option>
                                <option value={5}>kg</option>
                            </NativeSelect>
                            <br></br>
                            <button id="addIngBtn" onClick={this.addIngredient}>+</button>
                        </div>
                    </FormControl>

                    <FormControl
                        fullWidth={true}>
                        <h6>Description:</h6>
                        <TextField
                            multiline
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
                                value={this.state.date}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                variant="inline"
                                onChange={this.handleDateChange}
                                value={this.state.date}
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
                                placeholder={0}></input>
                            <br></br>
                            <h5 className="subLabel">Hours:</h5>
                            <input
                                className="subInput"
                                id="hours"
                                type="number"
                                min={0}
                                max={23}
                                name="hours"
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
                                onChange={this.handleInputChange}
                                placeholder={0}></input>
                        </div>
                    </FormControl>

                    <FormControl>
                        <h6>Image Upload:</h6>
                        <Button size="small" variant="contained" color="default" id="uploadBtn">
                            Upload Image</Button>
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
