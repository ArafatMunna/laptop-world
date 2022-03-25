import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {products.map((product) => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="col md-2"></div>
        </div>
    );
};

export default Products;
