import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [randomNumber, setRandomNumber] = useState("");

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // Add to cart button event handle
    const addToCart = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);
    };

    // Choose one randomly button event handle
    const chooseOneRandomly = () => {
        const randomNumber = Math.floor(Math.random() * carts.length);
        setRandomNumber(randomNumber);
    };

    // Reset button event handle
    const reset = () => {
        setCarts([]);
    };

    return (
        <div className="products-container mb-3 mt-5">
            {/* Card */}
            <div className="card-container mb-5">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>

            {/* Cart  */}
            <div className="p-3 bg-info rounded-3 mb-5">
                <div className="mt-4">
                    <h3 className="text-center">Selected Products</h3>
                    {carts.map((cart) => (
                        <Cart key={cart.id} cart={cart} />
                    ))}
                    <button
                        onClick={chooseOneRandomly}
                        className="border-0 mt-3 bg-success text-white p-2 fw-bold rounded-3"
                    >
                        Choose one for me
                    </button>
                    <div>
                        <div className="d-flex justify-content-start align-items-center my-3">
                            <div className="w-25 me-3">
                                <img
                                    className="img-fluid"
                                    src={carts[randomNumber]?.picture}
                                    alt=""
                                />
                            </div>
                            <h4>{carts[randomNumber]?.name}</h4>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={reset}
                            className="border-0 my-3 bg-danger text-white p-2 fw-bold rounded-3"
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
