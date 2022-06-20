import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Banner from "./components/banner";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner />
      </main>
    </React.Fragment>
  );
}

export default App;
