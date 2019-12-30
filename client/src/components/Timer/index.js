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
            if (hours < 10) { hours = "0" + hours };
            msecs = msecs % (60 * 60 * 1000);
            let mins = Math.floor(msecs / (60 * 1000));
            if (mins < 10) { mins = "0" + mins };
            msecs = msecs % (60 * 1000);
            let secs = Math.floor(msecs / 1000);
            if (secs < 10) { secs = "0" + secs };
            let timerStr = `${days}:${hours}:${mins}:${secs}`;
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