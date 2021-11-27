import React, { useContext, useState}  from "react";
import Cart from "./Cart";
import {Products} from "./Products";
import {CartContext } from "./Maincart";

const Contextcart =() => {
    const [Item, setItem] = useState(Products);
    

    return (
    <>
    <div className="Header">
        <i className="fas fa-arrow-left "></i>
        <h1>E-Commerce</h1>
        </div>,

        <div className="shopcartdiv">
            <h3>Shopping Cart</h3>
            <p>You have <spam>7</spam> items in shopping cart</p>
        </div>
        <div className="maincont">

                {
                        Item.map((curItem) =>{
                            return < Cart key={ curItem.id} {...curItem}/>
                        })

                }
                

            

            <div>
            <h4 className="total">Cart Total: <spam>2200000Rs</spam></h4>
            <button>Checkout</button>
            </div>
        </div>
    </>
    );
};

export default Contextcart;