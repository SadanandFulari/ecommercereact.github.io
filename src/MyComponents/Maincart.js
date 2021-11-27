import React, { createContext, useReducer } from "react";
import {Products} from "./Products";
import {reducer} from "./reducer";
import Contextcart from "./Contextcart";

export const CartContext = createContext();

const initialState = {
    item: Products,
    totalAmount: 0,
    totalItem: 0,
};

const Maincart = ()  =>{

    //const [Item, setItem] = useState(Products);
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) =>{
        return dispatch({
            type : "REMOVE_ITEM",
            payload: id,
        });
    };

    return(
        <>
        <CartContext.Provider vaule ={{  ...state, removeItem}}>
        <Contextcart />
        </CartContext.Provider>
        </>
    )
}

export default Maincart;