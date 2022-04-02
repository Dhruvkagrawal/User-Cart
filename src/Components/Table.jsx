import React, { useEffect, useState } from "react";
import "./Table.css";

function Table() {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const res = await fetch("http://localhost:4000/cart");
    let data = await res.json();
    setUser(data.data);
  };
  useEffect(() => {
    getUsers();
  },[]);
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Customer Name</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        {user.map((dta, i) => (
          <tbody>
            <tr className="active-row">
              <td>{++i}</td>
              <td>{dta.name}</td>
              <td>{dta.product}</td>
              <td>{dta.quantity}</td>
              <td>{dta.price}</td>
              <td>{dta.quantity*dta.price}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={getUsers}>Refresh</button>
    </>
  );
}

export  default Table;
