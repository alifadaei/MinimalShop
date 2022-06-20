import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class Banner extends Component {
    state = {  } 
    render() { 
        return (
            <div id="top-banner" className="rtl ">
            <h1 id="top-banner-title">سیب تامبولی تهران</h1>
            <small>آدرس: تهران، شهرک غرب، میدان کتاب، شماره 2</small>
            <div id="delivery-state">
                <span className="fa-stack">
                <FontAwesomeIcon className='fa-stack-2x' icon={faCircle}/>
                <FontAwesomeIcon className='fa-stack-1x' icon={faCircle} />
                </span> سفارش می پذیریم
            </div>
            <div id="delivery-time">
                <strong>میانگین زمان تحویل</strong>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <label>حضوری:</label>
                        <span>تا 30 دقیقه |</span>
                    </li>
                    <li className="list-inline-item">
                        <label>ارسال با پیک:</label>
                        <span>تا 120 دقیقه</span>
                    </li>
                </ul>
            </div>
        </div>
    
        );
    }
}
 
export default Banner;