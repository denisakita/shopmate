// Corrected ProductCard.js
import React from "react";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice"; // Corrected import statement

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, image } = product;

    return (
        <div className="productCard">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <div className="action">
                <p>${price}</p>
                <button onClick={() => dispatch(add(product))}>Add To Cart</button>
            </div>
        </div>
    );
};
