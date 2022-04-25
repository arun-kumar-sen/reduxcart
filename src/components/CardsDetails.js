import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardsDetails = () => {

  const {id} = useParams();
  const getCartNo = useSelector((state) => state.cart.cart);
  const [data, setdata] = useState([]);

  const filterData = ()=>{
    let filteredData = getCartNo.filter((item)=>{return item.id == id})
    setdata(filteredData);
  }

  useEffect(()=>{
    filterData()
  },[id])

  return (
    <div className="container my-2">
      <h2 className="text-center ">Item Details</h2>
      <section className="container my-3">
        <div className="itemsdetails">
         {data.map((item)=>{
           return (
             <>
              <div className="items_img">
            <img
        
              src={item.imgdata}
              alt=""
            />
          </div>

          <div className="details">
            <table>
              <tr>
                <td>
                  <p>
                    <strong>Restaurant:</strong>{item.rname}
                  </p>
                  <p>
                    <strong>Price:</strong>₹ {item.price}
                  </p>
                  <p>
                    <strong>Dish:</strong>{item.address}
                  </p>
                  <p>
                    <strong>Total:</strong>₹ xyz
                  </p>
                </td>
                <td style={{ paddingLeft: "40px" }}>
                  <p>
                    <strong>Rating </strong>
                    <span
                      style={{
                        backgroundColor: "green",
                        color: "#fff",
                        borderRadius: "5px",
                        padding: "2px 5px",
                      }}
                    >
                     
                      {item.rating}★
                    </span>
                  </p>
                  <p>
                    <strong>Order Review </strong>
                    <span>{item.somedata}</span>
                  </p>
                  <p>
                    <strong>Remove </strong>
                    <span>
                      <i
                        className="fas fa-trash"
                        style={{
                          color: "red",
                          cursor: "pointer",
                          fontSize: "20px",
                        }}
                      ></i>
                    </span>
                  </p>
                </td>
              </tr>
            </table>
          </div>
             </>
           )
         })}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
