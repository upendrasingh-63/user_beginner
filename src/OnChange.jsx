
import React,{ useState } from "react";

function OnChange() {
      
    const[name,setName]=useState("Guest");
    const[quantity,setQuantity]=useState(1);
    const[payment,setPayment]=useState("Visa");
    const[shipping,setShipping]=useState("Delivary");
  
    const handelOnChange=(e)=>{
      setName(e.target.value);
    }

    const changequantity=(e)=>{
        setQuantity(e.target.value)
    }

    const handelPayment=(e)=>{
        setPayment(e.target.value)
    }

    const handelShipping=(e)=>{
        setShipping(e.target.value)
    }
    return (
      <>
      <input value={name} onChange={handelOnChange}/>
      <p >Name: {name}</p>
      <hr/>
      <input value={quantity} type="number" onChange={changequantity}/>
      <p>Quantity: {quantity}</p>
      <hr/>
      <select value={payment} onChange={handelPayment}>
        <option value="">Select payment</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Paytm">Paytm</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <hr/>
      <label >
        <input type="radio" value="Pick Up"
                checked={shipping==="Pick Up"} onChange={handelShipping} />
        Pick Up
      </label><br/>
      <label >
      <input type="radio" value="Delivary"
                checked={shipping==="Delivary"} onChange={handelShipping} />
        Delivary
      </label>
      <p>Shipping: {shipping}</p>
      </>
    );
  }
  
  export default OnChange;
  