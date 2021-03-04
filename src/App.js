// create your App component here

import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             people:[]
        }
    }
    

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        .then(people=>this.setState({people:people.people}))
    }
    
    render() {
        return (
            <div>
                {/* {this.state.people?this.state.people.map(e=>{
                    return(<>
                    <li>{e.name}</li>
                    
                    </>)
                }):""} */}
            </div>
        )
    }
}
