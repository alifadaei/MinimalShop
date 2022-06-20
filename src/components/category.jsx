import React, { Component } from 'react';
import Product from './product';
class Category extends Component {
    state = { 
     } 

     

    render() { 
        const {products, categoryName, clickHandler} = this.props;
        return (
            <div className="category">
            <h3>{categoryName}</h3>
            <div className="row">
            {products.map(product => 
            <Product 
            key={product.id}
            productName={product.productName} 
            id={product.id}
            price={product.price} 
            quantity={product.quantity} 
            src={product.src} 
            clickHandler={clickHandler} />)}
            </div>
        </div> 
        );
    }
}
 
export default Category;