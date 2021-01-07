import React from 'react'
import ToDoItem from './ToDoItem'
import toDoData from './toDoData'

// function ToDo(){
//     let day = new Date();
//     day = day.getDate()+"/"+day.getMonth()+"/"+day.getUTCFullYear();
//     const toDoComponent = toDoData.map(item=> <ToDoItem key={item.id} id={item.id} item={item.name}/>);

//     console.log(toDoData);
//     return(
//         <div className="todo-list">
//             <h3>Check list for the day: {day}</h3>
//             {toDoComponent}
//         </div>
//     )
// }

class ToDo extends React.Component{
    
    day() {
        let d = new Date();
        return (
            d = d.getDate()+"/"+d.getMonth()+"/"+d.getUTCFullYear()   
        )
    }

    render(){
        const toDoComponent = toDoData.map(item=> <ToDoItem key={item.id} id={item.id} item={item.name}/>);
        return(
            <div className="todo-list">
                <h3>Check list for the day: {this.day()}</h3>
                {toDoComponent}
            </div>
        )
    }
}
export default ToDo