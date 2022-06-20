import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Banner from "./components/banner";
import ShoppingCart from "./components/shopping-cart";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner />
        <div id="panel-container" className="rtl wrapper">
          <ShoppingCart />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
