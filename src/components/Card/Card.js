import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Card = ({ product, addToCart }) => {
    const { name, picture, price } = product;
    return (
        <div className="col-12 col-md-4 border border-primary border-3 rounded-3 p-3">
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
                    className="w-100 border-0 p-2 bg-primary rounded text-white fw-bold"
                >
                    Add to Cart
                    <BsFillCartFill className="ms-2 fs-5" />
                </button>
            </div>
        </div>
    );
};

export default Card;
