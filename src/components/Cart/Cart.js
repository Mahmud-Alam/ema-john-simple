import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    //const user = useContext(UserContext);
    // er poriborte auth er hook use korbo

    //const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let totalPrice = 0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        totalPrice+=product.price*product.quantity;
    }

    let shipping = 0.00;
    if (totalPrice>35) {
        shipping =0;
    } else if(totalPrice>15){
        shipping = 4.99
    }
    else if(totalPrice>0){
        shipping = 12.99
    }
    const tax  = totalPrice/10;
    const grandTotal = (totalPrice+shipping+Number(tax)).toFixed(2);

    const formateNumber = num =>{
        // const precision = num.toFixed(2);
        return Number(num).toFixed(2);
    }

    return (
        <div>
            <div className="cartBox">
            <h4><FontAwesomeIcon icon={faTags}/> Order Summary</h4>
            <p className="d-flex justify-content-between"><span>Items Ordered:</span><span>{cart.length}</span></p>
            <p className="d-flex justify-content-between"><span>Subtotal:</span><span>${formateNumber(totalPrice)}</span></p>
            <p className="d-flex justify-content-between"><span>Shipping Cost:</span><span>${formateNumber(shipping)}</span></p>
            <p className="d-flex justify-content-between"><span>Tax(10%):</span><span>${formateNumber(tax)}</span></p>
            <h5 className="d-flex justify-content-between"><span>Grand Total:</span><span>${grandTotal}</span></h5>
            {
                props.children
            }
            </div>
        </div>
    );
};

export default Cart;