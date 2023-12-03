import React from "react";
import "./CartCard.css";
import {useCart} from "../context/CartContext";
import {remove} from "../store/cartSlice";
import {useDispatch} from "react-redux";

export const CartCard = ({product}) => {
    const {removeFromCart} = useCart();
    const dispatch = useDispatch();

    const {name, price, image} = product;

    return (
        <div className="cartCard">
            <img src={image} alt={name}/>
            <p className="productName">{name}</p>
            <p className="productPrice">${price}</p>
            {/*<button onClick={() => removeFromCart(product)}>Remove</button>*/}
            <button onClick={() => dispatch(remove(product))}>Remove</button>
        </div>
    )
}
