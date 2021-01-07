import React from 'react'
import Book from './components/Book'
import bookData from './components/bookData'

// function BookApp(){
//     const bookComponent = bookData.map(list=><Book title={list.title} author={list.author} price={list.price} key={list.id} checked={list.complete}/>
//     )

//     function day(){
//         let xyz = new Date();
//         let yz = xyz.getFullYear()+"/"+xyz.getMonth()+"/"+xyz.getUTCDay();
//         return yz;
//     }

//     return(
//         <div className="todo-list">
//             <h3>Books list as of {day()}</h3>
//             {bookComponent}
//         </div>
//     )
// }

class BookApp extends React.Component{
    day(){
        let xyz = new Date();
        let yz = xyz.getFullYear()+"/"+xyz.getMonth()+"/"+xyz.getUTCDay();
        return yz;
    }

    render(){
        const bookComponent = bookData.map(
            list=><Book title={list.title} author={list.author} price={list.price} key={list.id} checked={list.complete}/>
        )

        return(
            <div className="todo-list">
                <h3>Books list as of {this.day()}</h3>
                {bookComponent}
            </div>
        )
    }
}
export default BookApp