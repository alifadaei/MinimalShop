import React, { Component } from 'react';
import ProductList from './products-list';
class Products extends Component {
    products1 =  [
        {id:1, productName : "سوسیس", price: '20,000', quantity: 10, src: require('../assets/svg/sausage.svg')},
        {id:2, productName : "تکه گوشت مرغ", price: '10,000', quantity: 20, src: require('../assets/svg/chicken-leg.svg')},
    ]
    products2 =  [
        {id:3, productName : "سالاد", price: '10,000', quantity: 10, src: require('../assets/svg/salad.svg')},
    ]
    products3 =  [
        {id:4, productName : "مایونز", price: '20,000', quantity: 10, src: require('../assets/svg/mayonnaise.svg')},
        {id:5, productName : "کچاپ", price: '10,000', quantity: 20, src: require('../assets/svg/ketchup.svg')},
        {id:6, productName : "خردل", price: '30,000', quantity: 20, src: require('../assets/svg/mustard.svg')},
    ]

    state = { 
        categories: [
            {id: 1, categoryName: 'گوشت', products: this.products1},
            {id: 2, categoryName: 'سالاد', products: this.products2},
            {id: 3, categoryName: 'سس', products: this.products3},
    ]
     } 
    render() { 
        return (
        <div id="order-panel">
            {this.state.categories.map(category => <ProductList key={category.id} categoryName={category.categoryName} products={category.products}/>)
        }
        </div> 
        );
    }
}
 
export default Products;