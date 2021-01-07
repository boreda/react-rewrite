import React from 'react'
import Joke from './components/Joke'
import jokeData from './components/jokeData'

// function JokeApp(){
//     const jokeComponent = jokeData.map(jk=> <Joke question={jk.question} key={jk.id} answer={jk.answer}/>)
//     return(
//         <div className="todo-list">
//             {jokeComponent}
//         </div>
//     )
// }

class JokeApp extends React.Component{
    render(){
        const jokeComponent = jokeData.map(jk=> <Joke question={jk.question} key={jk.id} answer={jk.answer}/>)
        return(
            <div className="todo-list">
                {jokeComponent}
            </div>
        )
    }
}
export default JokeApp