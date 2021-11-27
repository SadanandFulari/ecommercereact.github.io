
import React, { useContext} from "react";
import { CartContext } from "./Maincart";

const Cart = ({id,description, price, img, amount, title}) =>{

    const removeItem = useContext(CartContext);

    return(
        <>
        <div className="firstdiv">
                <div>
                <img src={img} alt="Cellphone Img" />

                </div>
               
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <div>
                <i className="fas fa-minus"></i>
                <input type="number"  />
                <i className="fas fa-plus"></i>
                </div>

                <div>{price}</div>

                <div>
                <i className="fas fa-trash-alt" 
                onClick={() => removeItem(id)}></i>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Cart;