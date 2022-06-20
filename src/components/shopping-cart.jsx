import React, { Component } from 'react';
class ShoppingCart extends Component {
    state = {  } 
    render() { 
        return (
            <div id="shopping-basket" className="rtl">
            <div id="sbp1">
                <i id="sbp1-garbage" className="fal fa-trash-alt"></i>
                <h3 id="sbp1-title"> سبد خرید<span>&nbsp;(3)</span></h3>
                <div className="clearfix"></div>
            </div>
            <div className="sbp2">
                <div className="sbp2-right">
                    <h3 className="sbp2-title">تکه گوشت مرغ</h3>
                    <div className="sbp2-price">300,000 تومان</div>
                </div>
                <div className="control">
                    <i className="plus fal fa-plus-circle"></i>
                    <div className="quantity">4</div>
                    <i className="minus fal fa-minus-circle"></i>
                </div>
            </div>

            <div id="sbp3">
                <div id="sbp3-discount">
                    <p>تخفیف:</p>
                    <p> 10,000 تومان</p>
                </div>
                <div id="sbp3-total-charge">
                    <p>هزینه کل:</p>
                    <div>
                        <strike>10,000 تومان</strike>
                        <p>9,000 تومان</p>
                    </div>
                </div>
            </div>
            <h3 id="have-code">کد تخفیف دارید؟</h3>
            <div id="finish" className="btn btn-primary">نهایی کردن سفارش</div>
        </div>
        );
    }
}
 
export default ShoppingCart;