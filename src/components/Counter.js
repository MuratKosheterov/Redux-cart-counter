import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

function Counter() {
  const {cartItems, total, amount} = useSelector((store) => store.cart);


  return (
    <div className="Counter">
      <div className="container">
        <div className="row">
          <div className="col bg-dark  mt-3 text-light d-flex flex-wrap   d-block  justify-content-center   ">
            {cartItems.map((item) => {
              return <Item key={item.id} {...item} />;
            })}
          </div>
        </div>
        {total}
      </div>
      {amount}
    </div>
  );
}

export default Counter;
