import React, { Component } from 'react';
import CartItem from './shopping-cart-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
class ShoppingCart extends Component {
    state = {  } 

    render() { 
        const {clickHandler, products, trashHandler} = this.props;
        return (
            <div id="shopping-basket" className="rtl">
            <div id="sbp1">
                <i id="sbp1-garbage" className="fal fa-trash-alt"></i>
                <FontAwesomeIcon icon={faTrashCan} id='sbp1-garbage' onClick={trashHandler} style={{cursor: 'pointer'}}/>
                <h3 id="sbp1-title">سبد خرید<span>&nbsp;({products.length})</span></h3>
                <div className="clearfix"></div>
            </div>

            { products.map(product =>
            <CartItem
            key={product.id}
            clickHandler={clickHandler}
            product={product} />
            )}
            
    

            <div id="sbp3">

                <div id="sbp3-total-charge" className='mt-2'>
                    <p>هزینه کل:</p>
                    <div>
                        <p>{products.reduce((sum, product)=>{
                            sum += product.price * product.quantity;
                            return sum;
                        }, 0)} تومان</p>
                    </div>
                </div>
            </div>
            {/* <h3 id="have-code">کد تخفیف دارید؟</h3> */}
            <div id="finish" className="btn btn-primary">نهایی کردن سفارش</div>
        </div>
        );
    }
}
 
export default ShoppingCart;