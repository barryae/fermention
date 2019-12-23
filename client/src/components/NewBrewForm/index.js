import 'date-fns';
import React from "react";
import { Button, TextField, Container, NativeSelect, FormControl, Input, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import "./style.css";

function NewBrewForm(props) {

    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState();

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <>
            <Container maxWidth="sm">
                <FormControl
                    fullWidth={true}>
                    <h6 >Title:</h6>
                    <Input />
                    <FormHelperText >Required</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth={true}>
                    <h6>Category:</h6>
                    <NativeSelect>
                        <option value={0}>Other</option>
                        <option value={1}>Beer</option>
                        <option value={2}>Vinegar</option>
                        <option value={3}>Bread</option>
                        <option value={4}>Pickle</option>
                        <option value={5}>Kombucha</option>
                        <option value={6}>Miso</option>
                        <option value={7}>Wine</option>
                        <option value={8}>Kimchi</option>
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
                        <button id="addIngBtn">+</button>
                    </div>
                </FormControl>

                <FormControl
                    fullWidth={true}>
                    <h6>Description:</h6>
                    <TextField
                        multiline
                    />
                </FormControl>


                <FormControl>
                    <h6>Start Time:</h6>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            variant="inline"
                            format="MM/dd/yyyy"
                            onChange={handleDateChange}
                            value={selectedDate}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            variant="inline"
                            onChange={handleDateChange}
                            value={selectedDate}
                        />
                    </MuiPickersUtilsProvider>
                </FormControl>

                <FormControl fullWidth={true}>
                    <h6>Brew Time:</h6>
                    <div>
                        <h5 className="subLabel">Days:</h5>
                        <input className="subInput" id="days" type="number" min="0" placeholder="0"></input>
                        <br></br>
                        <h5 className="subLabel">Hours:</h5>
                        <input className="subInput" id="hours" type="number" min="0" max="23" placeholder="0"></input>
                        <br></br>
                        <h5 className="subLabel">Minutes:</h5>
                        <input className="subInput" id="hours" type="number" min="0" max="59" placeholder="0"></input>
                    </div>
                </FormControl>

                <FormControl>
                    <h6>Image Upload:</h6>
                    <Button size="small" variant="contained" color="default" id="uploadBtn">
                        Upload Image</Button>
                </FormControl>

                <div id="wrapper">
                    <Button size="large" variant="contained" color="primary" id="createBtn">
                        Create New Brew</Button>
                </div>


            </Container>
        </>
    );
}

export default NewBrewForm;
