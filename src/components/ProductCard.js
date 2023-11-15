import React from "react";
import "./ProductCard.css";
import {useCart} from "../context/CartContext";

export const ProductCard = ({product}) => {
    const { addToCart } = useCart();
    const {name, price, image} = product;

    return (
        <div className="productCard">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <div className="action">
                <p>${price}</p>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </div>
    )
}

// MENYRA 2
// export const ProductCard = (product) => {
//     const {name, price, image} = product;
//
//     return (
//         <div className="productCard">
//             <img src={image} alt={name}/>
//             <p className="name">{name}</p>
//             <div className="action">
//                 <p>${price}</p>
//                 <button>Add To Cart</button>
//             </div>
//         </div>
//     )
// }
