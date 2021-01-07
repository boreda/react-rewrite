import React from 'react'
import Product from './components/Product'
import productData from './components/productData'

// function ProductApp(){
//     let day = new Date();
//     day = day.getDate()+"/"+day.getMonth()+"/"+day.getUTCFullYear();
//     const productComponent = productData.map(list=><Product key={list.id }product={list}/>)

//     return(
//         <div className="todo-list">
//             <h3>Products listed as of {day}</h3>
//             {productComponent}
//         </div>
//     )
// }

class ProductApp extends React.Component{
    render(){
        let day = new Date();
        day = day.getDate()+"/"+day.getMonth()+"/"+day.getUTCFullYear();
        const productComponent = productData.map(list=><Product key={list.id }product={list}/>)
        return(
            <div className="todo-list">
                <h3>Products listed as of {day}</h3>
                {productComponent}
            </div>
        )
    }
}
export default ProductApp