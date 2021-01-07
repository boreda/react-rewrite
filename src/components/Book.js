import React from 'react'

// function Book(props){
//     function handleChange(){
//         console.log('chcekd');
//     }
//     return(
//         <div>
//             <ul>
//                 <li><input type="checkbox" name={props.title} checked={props.checked} onChange={handleChange}/></li>
//                 <li>Book Title: <span>{props.title}</span></li>
//                 <li>Author: <span>{props.author}</span></li>
//                 <li>Price: {props.price}</li>
//             </ul>
//         </div>
//     )
// }

class Book extends React.Component{
    constructor(){
        super()
        this.state={
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(){
        this.setState((prevState)=>{
            console.log(prevState);
            return {
                checked: !prevState.checked
            }
        })
    }

    render(){
        let styles = {
            display: "block",
            backgroundColor: "green",
            color: "white",
            borderRadius: 5,
            padding: 10,
            left: "-5",
            fontSize: 20
        }
        return(
            <div>
                <ul>
                    <li><input type="checkbox" name={this.props.title} checked={this.state.checked} onChange={this.handleChange}/></li>
                    <li>Book Title: <span>{this.props.title}</span></li>
                    <li>Author: <span>{this.props.author}</span></li>
                    <li>Price: {this.props.price}</li>
                    <li style={(this.state.checked) ? styles : null}>Book is completed, Cheers !!!</li>
                </ul> 
            </div>
        )
    }
}

// {(this.state.checked) ? styles : nothing}
export default Book