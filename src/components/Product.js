import React from 'react'

// function Product(props){
//     return(
//         <div>
//             <h3>Name: {props.product.name}</h3>
//             <p>About: {props.product.description}</p>
//             <ul>
//                 <li>Price: {props.product.price}</li>
//                 <li>Year: {props.product.year}</li>
//             </ul>
//         </div>
//     )
// }

class Product extends React.Component{
    render(){
        return(
            <div>
                <h3>Name: {this.props.product.name}</h3>
                <p>About: {this.props.product.description}</p>
                <ul>
                    <li>Price: {this.props.product.price}</li>
                    <li>Year: {this.props.product.year}</li>
                </ul>
            </div>
        )
    }
}
export default Product