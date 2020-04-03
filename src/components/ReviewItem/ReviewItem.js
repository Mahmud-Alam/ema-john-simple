import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
    const {name,img,quantity,price,key,stock,star, starCount} = props.product;
    return (
        <div className="product">
            <div className="product-img" >
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h5 className="product-name"><Link className="product-name-link" to={"/product/"+key} title="View Product Details">{name}</Link></h5>
                <div style={{color:'#ff9800'}}>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <span><FontAwesomeIcon icon={faStarHalfAlt} /></span>
                        <span style={{color:'#0066c0',paddingLeft:'20px'}}> {starCount}7 ratings </span><span style={{color:'black',paddingLeft:'10px'}}> | </span><span style={{color:'#0066c0',paddingLeft:'10px'}}> 1{star}2 answered questions</span>
                </div> 
                <p style={{color:'#232f3e',fontWeight:'700'}}>Quantity: {quantity}</p>
                <h4 style={{color:'#b12704'}}>${price}</h4>
                <p><small>Only <span style={{color:'#b12704'}}>{stock}</span> left in stock - Order soon</small></p>
                <button 
                className="main-button remove-button"
                onClick={()=>props.removeProduct(key)}
            ><FontAwesomeIcon icon={faTrashAlt}/> Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;