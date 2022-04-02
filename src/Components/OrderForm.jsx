import React, { useState } from "react";
import {getusers} from "./Table"
import Axios from "axios";
function OrderForm() {
    const [user, setUser] = useState({
    name: "",
    product: "",
    quantity: "",
    price: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const getUsers = async () => {
    const res = await fetch("http://localhost:4000/cart");
    let data = await res.json();
    setUser(data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/cart",
    user,
    ).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })


    setUser({
      name: "",
      product: "",
      quantity: "",
      price: "",
    });
  };



  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" id="box">
            Customer Name
          </label>
          <input
            type="text"
            autoComplete="off"
            value={user.name}
            onChange={handleInput}
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="product" id="box">
            Product Name
          </label>
          <select
            id="product"
            value={user.product}
            onChange={handleInput}
            name="product"
          >
            <option value="bread">Bread - Roll, Canadian Dinner</option>
            <option value="Spinach">Spinach - Frozen</option>
            <option value="Dill">Dill - Primerba, Paste</option>
            <option value="Coffee">Coffee - Cafe Moreno	</option>
            <option value="Chevere">Chevere Logs	</option>
            <option value="Loin"> Loin Cutlets	</option>
            <option value="Carrots">Carrots - Jumbo	</option>
            <option value="Tortillas">Tortillas - Flour, 12	</option>
            <option value="Olives">Olives - Nicoise	</option>
            <option value="Chocolate">Chocolate - Dark</option>
            <option value="Pepper">Pepper - Red Bell</option>
            <option value="Seedlings">Seedlings - Buckwheat, Organic	</option>
            <option value="Spinach">Spinach - Packaged	</option>
            <option value="Chips">Chips - Doritos	</option>
            <option value="Bread">Bread - Sour Sticks With Onion	</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" id="box">
            Quantity
          </label>
          <select
            id="quantity"
            autoComplete="off"
            value={user.quantity}
            onChange={handleInput}
            name="quantity"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label htmlFor="price" id="box">
            Price
          </label>
          <input
            type="text"
            autoComplete="off"
            value={user.price}
            onChange={handleInput}
            name="price"
            id="price"
          />
        </div>
        <button type="submit" onSubmit={()=>handleSubmit}>Add to Cart</button>
      </form>
    </>
  );
}

export default OrderForm;
