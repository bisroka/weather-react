import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

const APIKey = "3790fa34d346ad2608be38eca56077b2";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""
  };
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  //   handleCitySubmit = e => {
  //     console.log("dziala");
  //     e.preventDefault();

  //     const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value},uk&APPID=${APIKey}`;
  //     fetch(API)
  //       .then(response => {
  //         if (response.ok) {
  //           return response;
  //         }
  //         throw Error("dupaaa");
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data);
  //         const time = new Date().toLocaleString();
  //         this.setState({
  //           err: false,
  //           date: time,
  //           sunrise: data.sys.sunrise,
  //           sunset: data.sys.sunset,
  //           temp: Math.floor(data.main.temp - 273, 2),
  //           pressure: data.main.pressure,
  //           wind: data.wind.speed,
  //           city: this.state.value
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         this.setState({
  //           err: true,
  //           city: this.state.value
  //         });
  //       });
  //   };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value},uk&APPID=${APIKey}`;
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("dupaaa");
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const time = new Date().toLocaleString();
          this.setState({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: Math.floor(data.main.temp - 273, 2),
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: this.state.value
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            err: true,
            city: this.state.value
          });
        });
    }
  }
  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} />
        {this.state.value ? <Result weather={this.state} /> : null}
      </div>
    );
  }
}

export default App;