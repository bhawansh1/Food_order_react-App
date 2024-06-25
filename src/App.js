import React from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = (props) => {
  return (
    <>
      <Cart />
      <Header />
      <Meals />
    </>
  );
};

export default App;
