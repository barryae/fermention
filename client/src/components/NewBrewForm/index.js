import React from "react";
import { Button, TextField, Container, NativeSelect, FormControl, Input, FormHelperText, InputLabel, FormControlLabel } from '@material-ui/core';
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
                    <InputLabel >Title:</InputLabel>
                    <Input />
                    <FormHelperText >Required</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth={true}>
                    <InputLabel>Category:</InputLabel>
                    <NativeSelect>
                        <option value="" />
                        <option value={1}>Beer</option>
                        <option value={2}>Vinegar</option>
                        <option value={3}>Bread</option>
                        <option value={4}>Pickle</option>
                        <option value={5}>Kombucha</option>
                        <option value={6}>Miso</option>
                        <option value={7}>Wine</option>
                        <option value={8}>Kimchi</option>
                        <option value={0}>Other</option>
                    </NativeSelect>
                    <FormHelperText >Required</FormHelperText>
                </FormControl>
                <h6>Ingredients:</h6>
                <FormControl fullWidth={false}>
                    <FormControl
                        fullWidth={false}>
                        <InputLabel >Name:</InputLabel>
                        <Input />
                    </FormControl>
                    <FormControl
                        fullWidth={false}>
                        <InputLabel >Amount:</InputLabel>
                        <Input />
                    </FormControl>
                    <FormControl fullWidth={false}>
                        <InputLabel>Unit:</InputLabel>
                        <NativeSelect>
                            <option value="" />
                            <option value={1}>mL</option>
                            <option value={2}>L</option>
                            <option value={3}>mg</option>
                            <option value={4}>g</option>
                            <option value={5}>kg</option>
                        </NativeSelect>
                    </FormControl>
                    <Button variant="contained" color="primary">
                        + Add Ingredient</Button>
                </FormControl>

                <FormControl
                    fullWidth={true}>
                    <h6>Description:</h6>
                    <TextField
                        multiline
                    />
                </FormControl>

                <h6>Start Time:</h6>
                <FormControl>
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

            </Container>
        </>
    );
}

export default NewBrewForm;
