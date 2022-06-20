import React, { Component } from 'react';
import Sausage from '../assets/svg/sausage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle ,faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class Product extends Component {
    state = { 
     } 
    render() { 
        const {productName, src, quantity, price, id} = this.props;
        return (
            <div className="col-12 col-sm-6 col-md-4 ">
            <div className="food-item" food-id={id} price={price} title={productName}>
                <img src={src.default} alt={productName} />
                <h4 className="food-title">{productName}</h4>
                <div className="control">
                    <FontAwesomeIcon className='plus mx-1' icon={faPlusCircle}/>
                    <div className="quantity" quantity="0">{quantity}</div>
                    <FontAwesomeIcon className='minus mx-1' icon={faMinusCircle} />
                </div>
                <p className="price">{price} تومان</p>
                <div className="clearfix"></div>
            </div> 
        </div>
        );
    }
}
 
export default Product;