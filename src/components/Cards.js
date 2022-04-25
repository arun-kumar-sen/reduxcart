import React, { useState } from "react";
import { Button } from "@mui/material";
import Cardsdata from "./Carddata";
import { useDispatch } from "react-redux";
import {add} from "../store/cartSlice"
import "./style.css"

const Cards = () => {
  const [data, setdata] = useState(Cardsdata);
  const dispatch = useDispatch();

  const handleAdd =  (cartItem)=>{
    console.log(cartItem);
    dispatch(add(cartItem));
  }
  console.log(data);
  return (
    <>
      <div className="container">
        <h2 className="text-center my-5">Add Your Items </h2>

        <div className="row d-flex justify-content-center align-items-center" >
          {data.map((item) => {
            return (
              <>
                <div key={item.id} className="mt-2 card_style card mx-2 my-2" style={{ width: "22rem", border:"none" }}>
                  <img
                    style={{ height: "16rem" }}
                    className=" card-img-top"
                    src={item.imgdata}
                    alt={item.id}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.rname}</h5>
                    <p className="card-text">
                    ₹ {item.price}
                    </p>
                    <div className="button_div d-flex justify-content-center">
                      <Button onClick={()=>{handleAdd(item)}} variant="contained" className="col-lg-12 ">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
