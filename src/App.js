// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    let url = "http://api.open-notify.org/astros.json";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => data.people);
  }

  render() {
    return <div></div>;
  }
}