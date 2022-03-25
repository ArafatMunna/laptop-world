import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const addToCart = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);
    };

    const chooseOneRandomly = (carts) => {
        console.log(carts);
        // carts.map((cart) => console.log(cart));
    };

    const reset = () => {
        setCarts([]);
    };

    return (
        <div className="row gap-5 mb-3">
            <div className="col-md-8 p-0">
                <div className="row">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
            <div className="col-md-3 bg-info rounded-3">
                <div className="mt-4">
                    <h3 className="text-center">Selected Products</h3>
                    {carts.map((cart) => (
                        <Cart key={cart.id} cart={cart} />
                    ))}
                    <button
                        onClick={chooseOneRandomly}
                        className="border-0 mt-3 bg-success text-white p-2 fw-bold"
                    >
                        Choose one for me
                    </button>
                    <div>
                        <button
                            onClick={reset}
                            className="border-0 my-3 bg-danger text-white p-2 fw-bold"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
