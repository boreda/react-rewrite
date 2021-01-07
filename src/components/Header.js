import React from 'react';
import NavBar from './NavBar'

// function Header(){
//     return(
//         <div className="navStyles">
//             <h3>This is Header Component</h3>
//             <NavBar />
//         </div>
//     )
// }

class Header extends React.Component{
    render(){
        return(
            <div className="navStyles">
                <h3>This is Header Component</h3>
                <NavBar />
            </div>
        )
    }
}
export default Header