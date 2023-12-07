import React from "react";
import { useDispatch } from "react-redux";
import { increament, decreament } from "../redux/counterSlice";

function Item({ id, title, price, amount, image }) {
  const dispatch = useDispatch();
  return (
    <div className="w-25  p-3  shadow  m-4 d-flex  justify-content-between  align-items-center flex-column border  border-danger  rounded-5 ">
      <img src={image} alt="" className="w-25 " />
      <p>{title}</p>
      <h2>Price: {price}</h2>
      <h2>Total: {(price * amount).toFixed(2)}</h2>
      <p className=" text-center fs-1 ">{amount}</p>
      <div className=" d-flex  justify-content-between ">
        <button
          onClick={() => dispatch(decreament({ id }))}
          className="btn btn-danger me-4"
        >
          decreament (-)
        </button>

        <button
          onClick={() => dispatch(increament({ id }))}
          className="btn btn-success"
        >
          increament (+)
        </button>
      </div>
    </div>
  );
}

export default Item;