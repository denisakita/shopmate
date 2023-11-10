import {ProductCard} from "../components";
import {useTitle} from "../hooks/useTite";

export const Home = () => {

    useTitle("Home");


    const products = [
        {"id": 1, "name": "AirPods (1st generation, 2016)", "price": 159, "image": "./assets/images/1.jpg"},
        {"id": 2, "name": "AirPods (2nd generation, 2019)", "price": 129, "image": "/assets/images/2.jpg"},
        {"id": 3, "name": "AirPods Pro (1st generation, 2019)", "price": 249, "image": "/assets/images/3.jpg"},
        {"id": 4, "name": "AirPods Max (2020)", "price": 549, "image": "/assets/images/4.jpg"},
        {"id": 5, "name": "AirPods (3rd generation, 2021)", "price": 179, "image": "/assets/images/5.jpg"},
        {"id": 6, "name": "AirPods Pro (2nd generation, 2022)", "price": 249, "image": "/assets/images/6.jpg"},
        {
            "id": 7,
            "name": "AirPods Pro (2nd generation, 2023) with USB‐C port",
            "price": 249,
            "image": "/assets/images/7.jpg"
        },
    ]

    return (
        <main>
            <section className="products">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}

                {/*// MENYRA 2*/}
                {/*{products.map(({ id, name, price, image }) => (*/}
                {/*    <ProductCard key={id} name={name} price={price} image={image} />*/}
                {/*))}*/}
            </section>
        </main>
    )
}
