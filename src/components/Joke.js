import React from 'react'

// function Joke(props){
//     return(
//         <div>
//             <h3>Question: {props.question}</h3>
//             <h4>Answer: {props.answer}</h4>
//         </div>
//     )
// }

class Joke extends React.Component{
    render(){
        return(
            <div>
                <h3>Question: {this.props.question}</h3>
                <h4>Answer: {this.props.answer}</h4>
            </div>
        )
    }
}
export default Joke