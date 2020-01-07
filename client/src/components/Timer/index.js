import React, { Component } from "react";

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brewDate: new Date(this.props.endTime),
            date: new Date(),
            timer: "00:00:00:00"
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    timetoBrew(msecs) {
        if (msecs <= 0) {
            return "FINISHED!";
        } else {
            let days = Math.floor(msecs / (24 * 60 * 60 * 1000));
            msecs = msecs % (24 * 60 * 60 * 1000);
            let hours = Math.floor(msecs / (60 * 60 * 1000));

            msecs = msecs % (60 * 60 * 1000);
            let mins = Math.floor(msecs / (60 * 1000));

            msecs = msecs % (60 * 1000);
            let secs = Math.floor(msecs / 1000);

            let timerStr = `${days} days ${hours} hours ${mins} minutes ${secs} seconds`;
            return timerStr;
        }
    }

    tick() {
        let t = this.state.brewDate - this.state.date;
        this.setState({
            date: new Date(),
            timer: this.timetoBrew(t)
        });
    }

    render() {
        return (
            <>{this.state.timer}</>
        );
    }
}

export default Timer;