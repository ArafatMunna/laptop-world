import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./Card.css";

const Card = ({ product, addToCart }) => {
    const { name, picture, price } = product;
    return (
        <div className="border border-2 border-primary p-3 shadow-lg rounded-3">
            <div>
                <img className="img-fluid" src={picture} alt="" />
            </div>
            <div className="my-3">
                <h2 className="text-primary">{name}</h2>
                <h4>Price: ${price}</h4>
            </div>
            <div>
                <button
                    onClick={() => addToCart(product)}
                    className="w-100 border-0 p-2 bg-primary rounded-3 text-white fw-bold"
                >
                    Add to Cart
                    <BsFillCartFill className="ms-2 fs-5" />
                </button>
            </div>
        </div>
    );
};

export default Card;
