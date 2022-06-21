import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle ,faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class CartItem extends Component {
    render() { 
        const {product, clickHandler} = this.props;
        return (
            <div className="sbp2">
                <div className="sbp2-right">
                    <h3 className="sbp2-title">{product.productName}</h3>
                    <div className="sbp2-price">{product.price} تومان</div>
                </div>
                <div className="control">
                <FontAwesomeIcon className='plus mx-1' onClick={()=> clickHandler(product.id, +1)} icon={faPlusCircle}/>
                    <div className="quantity">{product.quantity}</div>
                    <FontAwesomeIcon className='minus mx-1' onClick={()=> clickHandler(product.id, -1)} icon={faMinusCircle} />

                </div>
            </div>

        );
    }
}
 
export default CartItem;