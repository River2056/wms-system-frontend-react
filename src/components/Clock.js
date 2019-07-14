import React, { Component } from "react";

class Clock extends Component {
  state = {
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    day: new Date().getDay(),
    date: new Date().getDate(),
    month: new Date().getMonth()
  };

  componentDidMount() {
    this.interval = setInterval(this.displayClock, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayClock = () => {
    let updateTime = new Date();
    let hour = updateTime.getHours();
    let min = updateTime.getMinutes();
    let sec = updateTime.getSeconds();
    let day = updateTime.getDay();
    let date = updateTime.getDate();
    let month = updateTime.getMonth();

    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    switch (day) {
      case 0:
        day = "SUN";
        break;
      case 1:
        day = "MON";
        break;
      case 2:
        day = "TUE";
        break;
      case 3:
        day = "WED";
        break;
      case 4:
        day = "THUR";
        break;
      case 5:
        day = "FRI";
        break;
      case 6:
        day = "SAT";
        break;
    }

    switch (month) {
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAY";
        break;
      case 5:
        month = "JUN";
        break;
      case 6:
        month = "JULY";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OCT";
        break;
      case 10:
        month = "NOV";
        break;
      case 11:
        month = "DEC";
        break;
    }

    this.setState({
      hour: hour,
      min: min,
      sec: sec,
      day: day,
      date: date,
      month: month
    });
  };

  render() {
    return (
      <div style={style}>
        <span style={{ fontSize: "25px", float: "left" }}>
          {this.state.hour}:{this.state.min}:{this.state.sec}
        </span>
        <span style={{ fontSize: "25px", float: "right" }}>
          {this.state.day}-{this.state.date}-{this.state.month}
        </span>
      </div>
    );
  }
}

const style = {
  fontFamily: "Orbitron",
  border: "3px solid #007ACC",
  borderRadius: "5px",
  height: "45px"
};

export default Clock;
