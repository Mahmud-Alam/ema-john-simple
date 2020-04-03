import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { useAuth } from '../Login/useAuth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { processOrder } from '../../utilities/databaseManager';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => { 
    }
    const auth = useAuth();

    const [zip,setZip] = useState(0);

    const handleShipment = ()=>{
      processOrder();
      alert("Thank you "+auth.user.name+" for purchasing our product.");
    }
    const handlerZip=(e)=>{
      setZip(e.target.value);
    }
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

          <div className="shipmentLine d-flex">
            <div className="shipmentBox d-flex justify-content-between">
            <label htmlFor="name">Name: </label>
            {auth.user? <input name="name" 
                defaultValue={auth.user.name} 
                ref={register({ required: true })} 
                placeholder="Full Name"/>
              : <input name="name" ref={register({ required: true })} placeholder="Full name"/>
              }
            </div>
            {
              errors.name && <span className="error">Name is required!</span>
            }
          </div>
          
          <div className="shipmentLine d-flex">
            <div className="shipmentBox d-flex justify-content-between">
            <label htmlFor="name">Email: </label>
            {auth.user?<input name="email" 
                defaultValue={auth.user.email } 
                ref={register({ required: true })} 
                placeholder="Email" />
              : <input name="email" ref={register({ required: true })} placeholder="Email"/>
              }
            </div>
            {
              errors.email && <span className="error">Email is required!</span>
            }
          </div>

          
          <div className="shipmentLine d-flex">
            <div className="shipmentBox d-flex justify-content-between">
            <label htmlFor="name">Address: </label>
            <input name="address" ref={register({ required: true })} placeholder="Address"/>
            </div>
            {
              errors.address && <span className="error">Address is required!</span>
            }
          </div>
          
          
          <div className="shipmentLine d-flex">
            <div className="shipmentBox d-flex justify-content-between">
            <label htmlFor="name">City: </label>
            <input name="city" ref={register({ required: true })} placeholder="City"/>
            </div>
            {
              errors.city && <span className="error">City is required!</span>
            }
          </div>

          <div className="shipmentLine d-flex">
            <div className="shipmentBox d-flex justify-content-between">
              <label htmlFor="name">Country: </label>
              <input name="country" ref={register({ required: true })} placeholder="Country" />
            </div>
            {
              errors.country && <span className="error">Country is required!</span>
            }
          </div>
          
          <div className="shipmentLine d-flex ">
            <div className="shipmentBox d-flex justify-content-between">
              <label htmlFor="name">Zip Code: </label>
              <input onChange={handlerZip} name="zipcode" ref={register({ required: true })} placeholder="Zip Code" />
            </div>
            {
              errors.zipcode && <span className="error">Zip Code is required!</span>
            }
          </div>
          
          {
            zip===0 ? <input className="main-button shipment-button" type="submit" />:
             <Link to='/'>
             <input className="main-button shipment-button" onClick={handleShipment} type="submit" />
             </Link>
          }
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
};

export default Shipment;