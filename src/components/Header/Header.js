import React from 'react';
import logo from '../../images/logo1.png';
import user from '../../images/user2.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';


// const usePrevious = value =>{
//     const prev = useRef();
//     useEffect(()=>{
//         prev.current = value; 
//     },[]);
// }

const Header = () => {
    //const user = useContext(UserContext); etar poriborte amra auth er hook use korbo
    const auth = useAuth();
    console.log(auth.user)
    // console.log(props.cart);

    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        })
    }

    return (
        <div className='header'>
            {/* {<nav>
                <img src={logo} alt=""/>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {
                    auth.user && <span style={{color:'yellow'}}>Welcome {auth.user.name}</span>
                }
                {
                    auth.user ? <a href="/login"> Sign out</a>
                    : <a href="/login">Sign in</a>
                }
            </nav>} */}


            <nav className="navbar navbar-expand-lg navbar-light bg-color">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                        <li className="nav-item active">
                            <a className="nav-link" href="/shop">Shop <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/review">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/inventory">Manage Inventory</a>
                        </li>
                        <li className="nav-item">
                            {
                                auth.user && <span style={{color:'#ff9800',lineHeight:'58px'}}>Welcome, {auth.user.name}</span>
                            }
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <span className="cartValue"><FontAwesomeIcon icon={faCartPlus}/> {productKeys.length} </span>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="button-color" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav signInAnchor">
                        <li>
                            {
                                auth.user ? <a onClick={handleSignOut} href="/login">Sign out</a>
                                : <a href="/login">Sign in</a>
                            }
                        </li>
                        <li>
                            {
                                auth.user ? <img className="profile-photo" src={auth.user.photo} alt=""/>
                                : <img className="fake-photo" src={user} alt=""/>
                            }
                        </li> 
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;