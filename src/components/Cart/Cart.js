import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart);
    const {picture, name} = cart;
    return (
        <div className='d-flex justify-content-start my-3'>
            <div className='w-25 me-3'>
                <img className='img-fluid' src={picture} alt="" />
            </div>
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;