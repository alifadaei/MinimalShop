import React, { Component } from 'react';
import Product from './product';
class ProductList extends Component {
    state = { 
     } 
    render() { 
        return (
            <div className="category">
            <h3>{this.props.categoryName}</h3>
            <div className="row">
            {this.props.products.map(product => <Product key={product.id} productName={product.productName} price={product.price} quantity={product.quantity} src={product.src} />)}
            </div>
        </div> 
        );
    }
}
 
export default ProductList;