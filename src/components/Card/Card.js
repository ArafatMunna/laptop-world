import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Card = ({ product }) => {
    const { name, picture, price } = product;
    return (
        <div className="col-12 col-md-4 border border-info border-3 rounded-3 p-3">
            <div className="w-100">
                <img className="img-fluid" src={picture} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h3>Price: ${price}</h3>
            </div>
            <div>
                <button className="w-100 border-0 p-2 bg-info rounded text-white">
                    Add to Cart
                    <BsFillCartFill className="ms-2 fs-5" />
                </button>
            </div>
        </div>
    );
};

export default Card;
