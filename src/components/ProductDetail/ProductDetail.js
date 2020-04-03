import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd=>pd.key ===productKey);
    // console.log(product);
    const { name, seller, price, stock, img, star, starCount, category,key } = product;
    // console.log(star);

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="product" style={{margin:'50px 0'}}>
                <div style={{marginTop:'20px'}} className="product-img" >
                    <img src={img} alt="" />
                </div>
                <div className="product-info">
                    <div style={{borderBottom: '1px solid lightgray'}}>
                        <h3 className="product-name" style={{color: 'rgb(96, 96, 96)'}}>{name}</h3>
                        <div style={{color:'#ff9800'}}>
                            <span><FontAwesomeIcon icon={faStar} /></span>
                            <span><FontAwesomeIcon icon={faStar} /></span>
                            <span><FontAwesomeIcon icon={faStar} /></span>
                            <span><FontAwesomeIcon icon={faStar} /></span>
                            <span><FontAwesomeIcon icon={faStarHalfAlt} /></span>
                            <span style={{color:'#0066c0',paddingLeft:'20px'}}> {starCount}7 ratings </span><span style={{color:'black',paddingLeft:'10px'}}> | </span><span style={{color:'#0066c0',paddingLeft:'10px'}}> 1{star}2 answered questions</span>
                        </div><br/>
                    </div>
                    <h4 style={{margin:'20px  0',color:'gray'}}>Price: <span style={{color:'#b12704'}}> ${price}</span> </h4>
                    <h4 style={{color:'gray'}}>Features:</h4>
                    {
                        product.features.length ?
                        <ul>
                            {product.features.map(pd=> 
                            <li>{pd.description} : {pd.value}</li>
                                )}
                        </ul>
                        : <p><small>No features available for this product</small></p>
                    }
                    <p>Made by: {seller}</p>
                    <p>Category: {category}</p>
                    <p>Only <span style={{color:'#b12704'}}>{stock}</span> left in stock - Order soon</p>
                </div>
            </div>
            <div style={{marginTop:'200px'}}>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ProductDetail;