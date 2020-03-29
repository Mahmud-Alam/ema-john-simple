import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity,price,key} = props.product;
    return (
        <div>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p><br/>
            <p>Price: ${price}</p><br/>
            <button 
                className="main-button"
                onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;