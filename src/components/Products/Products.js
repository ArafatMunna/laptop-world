import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className="row gap-3 mb-3">
                <div className="col-md-8">
                    <div className="row">
                        {products.map((product) => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <div className="col-md-3 bg-info rounded-3">
                    <Cart/>
                </div>
            </div>
        </div>
    );
};

export default Products;
