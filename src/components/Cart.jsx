import React from "react";
import { useSelector } from "react-redux";

import "./style.css";
import { Typography } from "@mui/material";
export default function Cart() {
  const cartData = useSelector((state) => state.cartDataState);
  const amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <div>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Title: </td>
            <td>Description: </td>
            <td>Price: </td>
            <td>Category: </td>
            <td>Rating: </td>
          </tr>

          {cartData.map((item) => (
            <tr key={item.id}>
              <td style={{ width: "7rem" }}>
                <Typography
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "10rem",
                  }}
                  id="text"
                >
                  {item.title}
                </Typography>
              </td>
              <td>
                <Typography
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "20rem",
                  }}
                  id="text"
                >
                  {item.description}
                </Typography>
              </td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.rating.rate}</td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>$ {Math.floor(amount)}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>$ {Math.floor(amount / 5)}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>00000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>$ {Math.floor(amount - amount / 10)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
