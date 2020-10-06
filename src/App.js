// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
      names: []
  }

  render() {
    return (
      <div>
        {this.state.names.map((p) => <p>{p.name}</p>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(({names}) => this.setState({ names: names }))

  }

}