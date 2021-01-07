
import React from 'react'

class AppState extends React.Component{
    constructor(){
        super()
        this.state={
            name: "Raja Hindustani",
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>{
            console.log(prevState)
            return {
                name: "Bagizaar",
                count: prevState.count+1
            }
        })
    }

    render(){
        return(
            <div>
                <h3>Check the State {this.state.name}</h3>
                <button onClick={this.handleClick}>Click me for Quiz</button>
            </div>
        )
    }
}
export default AppState