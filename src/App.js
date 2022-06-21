import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Banner from "./components/banner";
import ShoppingCart from "./components/shopping-cart";
import Categories from "./components/categories";
import Login from "./components/login";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        categoryID: 1,
        categoryName: "گوشت",
        productName: "سوسیس",
        price: 200,
        quantity: 10,
        src: require("./assets/svg/sausage.svg"),
      },
      {
        id: 2,
        categoryID: 1,
        categoryName: "گوشت",
        productName: "تکه گوشت مرغ",
        price: 100,
        quantity: 20,
        src: require("./assets/svg/chicken-leg.svg"),
      },
      {
        id: 3,
        categoryID: 2,
        categoryName: "سالاد",
        productName: "سالاد",
        price: 1000,
        quantity: 10,
        src: require("./assets/svg/salad.svg"),
      },
      {
        id: 4,
        categoryID: 3,
        categoryName: "سس",
        productName: "مایونز",
        price: 300,
        quantity: 10,
        src: require("./assets/svg/mayonnaise.svg"),
      },
      {
        id: 5,
        categoryID: 3,
        categoryName: "سس",
        productName: "کچاپ",
        price: 130,
        quantity: 20,
        src: require("./assets/svg/ketchup.svg"),
      },
      {
        id: 6,
        categoryID: 3,
        categoryName: "سس",
        productName: "خردل",
        price: 150,
        quantity: 20,
        src: require("./assets/svg/mustard.svg"),
      },
    ],
  };

  clickHandler = (id, operand) => {
    const index = this.state.products.findIndex((product) => {
      return product.id === id;
    });
    const products = this.state.products;
    products[index].quantity += operand;
    if (products[index].quantity < 0) return;
    this.setState({ products });
  };

  trashHandler = () => {
    const products = this.state.products;
    products.forEach((product) => {
      product.quantity = 0;
    });
    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <main>
          <Banner />
          <div id="panel-container" className="rtl wrapper">
            <Categories
              products={this.state.products}
              clickHandler={this.clickHandler}
            />
            <ShoppingCart
              trashHandler={this.trashHandler}
              products={this.state.products.filter(
                (product) => product.quantity !== 0
              )}
              clickHandler={this.clickHandler}
            />
          </div>
        </main> */}
        <Login />
      </React.Fragment>
    );
  }
}

export default App;
