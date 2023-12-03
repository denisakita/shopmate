import React from "react";
import {CartCard} from "../components";
import {useTitle} from "../hooks/useTite";
import {useCart} from "../context/CartContext";
import {useSelector} from "react-redux";

export const Cart = () => {
    // const {total} = useCart();
    useTitle("Cart");
    const products = useSelector(state=>state.cartState.cartList);
    const total = useSelector(state=>state.cartState.total);



    return (
        <main>
            <section className="cart">
                <h1>Cart Items: {products.length} / ${total}</h1>
                { products.map((product) => (
                    <CartCard key={product.id} product={product} />
                )) }
            </section>
        </main>
    )
}
