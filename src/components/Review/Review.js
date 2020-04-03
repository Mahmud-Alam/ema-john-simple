import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faSignInAlt,faBan } from '@fortawesome/free-solid-svg-icons'
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
import Header from '../Header/Header';
import './Review.css'
import Footer from '../Footer/Footer';

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const auth = useAuth();

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd=>pd.key!==productKey);
        setCart(newCart); //website theke remove hbe bt database theke remove hbe na
        removeFromDatabaseCart(productKey); //database thekew remove hoise now
    }
    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        //const counts = Object.values(savedCart);
       // const counts = productKeys.map(key=>savedCart[key]);
        const cartProducts = productKeys.map(key=>{
            const product = fakeData.find(pd=>pd.key===key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="twin-container">
                <div className="product-container">
                    {
                        cart.map(pd => <ReviewItem 
                            key = {pd.key}
                            removeProduct = {removeProduct}
                            product={pd}></ReviewItem>)
                    }
                    {
                        thankYou
                    }
                    {
                        !cart.length && <div className="empty-cart">
                            <h1>Your cart is empty. <br/><br/><Link className="empty-cart-anchor" to="/">Click here for shopping!</Link> </h1>
                        </div>
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        
                            {
                               cart.length && auth.user ?
                                <Link to="shipment"><button className="main-button"><FontAwesomeIcon icon={faShippingFast}/> Proceed Shipment</button></Link>
                                :
                                cart.length?
                                <Link to="login"><button className="main-button"><FontAwesomeIcon icon={faSignInAlt}/> Sign-in to Proceed</button></Link>
                                :
                                <Link to="/"><button className="main-button remove-button"><FontAwesomeIcon icon={faBan}/> You can't Proceed </button></Link>
                            }
                    </Cart>
                </div>
            </div>
            <div style={{marginTop:'200px'}}>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Review;