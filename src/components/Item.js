import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "../redux/counterSlice";

function Item({ item }) {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  console.log(counter);
  console.log(item);
  return (
    <div className="w-25  p-3  shadow  m-4 d-flex  justify-content-between  align-items-center flex-column border  border-danger  rounded-5 ">
      <img src={item.image} alt="" className="w-25 " />
      <p>{item.title}</p>
      <h2>Price: {item.price}</h2>
      <h2>Total: {(item.price * counter.data).toFixed(2)}</h2>
      <p className=" text-center fs-1 ">{counter.data}</p>
      <div className=" d-flex  justify-content-between ">
        <button
          onClick={() => dispatch(decreament({id: item.id}))}
          className="btn btn-danger"
        >
          decreament (-)
        </button>
        <button
          onClick={() => dispatch(increament(item.id))}
          className="btn btn-success"
        >
          increament (+)
        </button>
      </div>
    </div>
  );
}

export default Item;
