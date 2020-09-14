// create your App component here
import React, { Component } from 'react';

class App extends Component{

    constructor(){
        super();
        this.state={
            people:[]
        }
    }
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response=>response.json())
        .then((elements) => {
            this.setState({ people: elements.people })
            console.log(elements);   
       
        })
      
}

    

render(){
    return(
        <div>
        {this.state.people.map((element,index)=><h1 key={index}>{element.name}</h1>)}
        </div>
    )
}
}

export default App;