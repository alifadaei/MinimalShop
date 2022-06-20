import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Banner from "./components/banner";
import ShoppingCart from "./components/shopping-cart";
import Categories from "./components/categories";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        categoryID: 1,
        categoryName: "گوشت",
        productName: "سوسیس",
        price: "20,000",
        quantity: 10,
        src: require("./assets/svg/sausage.svg"),
      },
      {
        id: 2,
        categoryID: 1,
        categoryName: "گوشت",
        productName: "تکه گوشت مرغ",
        price: "10,000",
        quantity: 20,
        src: require("./assets/svg/chicken-leg.svg"),
      },
      {
        id: 3,
        categoryID: 2,
        categoryName: "سالاد",
        productName: "سالاد",
        price: "10,000",
        quantity: 10,
        src: require("./assets/svg/salad.svg"),
      },
      {
        id: 4,
        categoryID: 3,
        categoryName: "سس",
        productName: "مایونز",
        price: "20,000",
        quantity: 10,
        src: require("./assets/svg/mayonnaise.svg"),
      },
      {
        id: 5,
        categoryID: 3,
        categoryName: "سس",
        productName: "کچاپ",
        price: "10,000",
        quantity: 20,
        src: require("./assets/svg/ketchup.svg"),
      },
      {
        id: 6,
        categoryID: 3,
        categoryName: "سس",
        productName: "خردل",
        price: "30,000",
        quantity: 20,
        src: require("./assets/svg/mustard.svg"),
      },
    ],
  };

  clickHandler = (id, operand) => {
    console.log("salam");
    const index = this.state.products.findIndex((product) => {
      return product.id === id;
    });
    const products = this.state.products;
    products[index].quantity += operand;
    // console.log(products[index].quantity);
    if (products[index].quantity < 0) return;
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Banner />
          <div id="panel-container" className="rtl wrapper">
            <Categories
              products={this.state.products}
              clickHandler={this.clickHandler}
            />
            <ShoppingCart />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
