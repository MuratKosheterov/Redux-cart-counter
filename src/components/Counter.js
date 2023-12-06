import React from "react";

import products from "../data/data";
import Item from "./Item";

function Counter() {

  const product = products;

  return (
    <div className="Counter">
      <div className="container">
        <div className="row">
          
          <div className="col bg-dark  mt-3 text-light d-flex flex-wrap   d-block  justify-content-center   ">
            {product.map((item) => {
              return (
                <Item  key={item.id} item={item} />
              );    
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Counter;
