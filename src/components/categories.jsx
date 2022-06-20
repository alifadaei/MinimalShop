import React, { Component } from 'react';
import Category from './category';
class Categories extends Component {

    render() { 
        const {products, clickHandler} = this.props;
        const categories = products.reduce((categories, item) => {
            if(!categories[`category${item.categoryID}`])
                categories[`category${item.categoryID}`] = [];
            categories[`category${item.categoryID}`].push(item);
            return categories;
          }, {});

        return (
        <div id="order-panel">
            {Object.entries(categories).map(category => (
            <Category 
            key={category[1][0].categoryID}
            categoryName={category[1][0].categoryName} 
            products={category[1]} 
            clickHandler={clickHandler}/>)
            )
        }
        </div> 
        );
    }
}
 
export default Categories;