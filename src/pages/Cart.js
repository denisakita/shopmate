import React from "react";
import {CartCard} from "../components";
import {useTitle} from "../hooks/useTite";
export const Cart = () => {

    useTitle("Cart");

    const products = [
        {"id": 1, "name": "AirPods (1st generation, 2016)", "price": 159, "image": "./assets/images/1.jpg"},
        {"id": 2, "name": "AirPods (2nd generation, 2019)", "price": 129, "image": "/assets/images/2.jpg"},
    ]

    return (
        <main>
            <section className="cart">
                <h1>Cart Items: {products.length}</h1>
                {products.map((product) => (
                    <CartCard key={product.id} product={product}/>
                ))}

            </section>
        </main>
    )
}
