import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mui/material";
import { remove } from "../store/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const getCartNo = useSelector((state) => state.cart.cart);
  // console.log(getCartNo.cart);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const del = (id)=>{
    dispatch(remove(id))
  }

  return (
    <>
      <nav
        style={{ height: "60px" }}
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <Link to={"/"} style={{ marginLeft: "20px" }} className="navbar-brand">
          ReduxCart
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={"/"} className="nav-link" href="#">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <Badge
          style={{ marginRight: "60px", cursor: "pointer" }}
          badgeContent={getCartNo.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            class="fa-solid fa-cart-shopping"
            style={{ color: "white", fontSize: "20px" }}
          ></i>
        </Badge>
      </nav>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getCartNo.length ? (
          <div
            className="card_details"
            style={{ width: "24rem", padding: "10px" }}
          >
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
                <hr
                  style={{
                    height: "2px",
                    color: "gray",
                    backgroundColor: "gray",
                  }}
                />
              </thead>
              <tbody>
                {getCartNo.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <Link to={`/cart/${item.id}`}>
                          <img
                           onClick={handleClose}
                            style={{ width: "5rem", height: "5rem" }}
                            src={item.imgdata}
                            alt=""
                          />
                          </Link>
                        </td>
                        <td>
                          <p>{item.rname}</p>
                          <p>Price: ₹ {item.price}</p>
                          <p>Quantity:  {item.qnty}</p>
                          <p onClick={()=>del(item.id)}><i style={{color:"red",cursor:"pointer",fontSize:"20px"}} className="fas fa-trash smalltrash"></i></p>
                        </td>
                         <p onClick={()=>del(item.id)}><i style={{color:"red",cursor:"pointer",fontSize:"20px"}} className="fas fa-trash largetrash"></i>
                         </p>
                      </tr>
                       
                      <hr />
                    </>
                  );
                })}
                <p>Total:666</p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            className="card_details"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <i
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
              className="fas fa-close smallclose"
            ></i>
            <p style={{ margin: "10px", padding: "10px" }}>
              Your Cart Is Empty
            </p>
            <img style={{ width: "100px" }} src="./cartimage.gif" alt="" />
          </div>
        )}
      </Menu>
    </>
  );
};

export default Header;
