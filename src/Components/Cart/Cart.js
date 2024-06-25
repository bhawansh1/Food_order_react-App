import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Card from "../UI/Card";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "PIZZA", price: 11.99 }].map((item) => (
        <CartItem id={item.id} key={item.id} name={item.name} description={item.description} price={item.price} />
      ))}
    </ul>
  );
  return (
    <Modal>
      <Card>
        <ul>{cartItems}</ul>
      </Card>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>40.21</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
 