import React, { useState, useEffect } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        //const counts = Object.values(savedCart);
       // const counts = productKeys.map(key=>savedCart[key]);
        const previousCart = productKeys.map(key=>{
        const product = fakeData.find(pd=>pd.key===key);
        product.quantity = savedCart[key];
        return product;
        });
        setCart(previousCart);
    },[])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key===toBeAddedKey);
        let count =1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=>pd.key!==toBeAddedKey);
            newCart = [...others,sameProduct];
        }
        else{
            product.quantity =1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count,cart.length);    
    }

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="twin-container">
                <div className="product-container">
                    {
                        products.map(pd=>
                        <Product 
                        key = {pd.key}
                        showAddToCart ={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart = {cart}>
                        <Link to="/review">
                        <button className="main-button"><FontAwesomeIcon icon={faShoppingBag}/> Review Order</button>
                        </Link>
                    </Cart>
                </div>    
            </div>
            <div style={{marginTop:'100px'}}>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Shop;