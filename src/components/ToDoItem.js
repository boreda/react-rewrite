import React from 'react'

// function ToDoItem(props){
//     return(
//         <div>
//             <p>
//                 <input type="checkbox" name="item 1"/>
//                 <span>{props.item}</span>
//             </p>
//         </div>
//     )
// }

class ToDoItem extends React.Component{
    render(){
        return(
            <div>
                <p>
                    <input type="checkbox" name="item 1"/>
                    <span>{this.props.item}</span>
                </p>
            </div>
        )
    }
}
export default ToDoItem