import React from 'react';
import logo from '../../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLanguage} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-full">
            <div className="footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <h5>Get to Know Us</h5>
                            <nav>
                                <li> Careers</li>
                                <li> Blog</li>
                                <li> About ema-John</li>
                                <li> Investor Relations</li>
                                <li> ema-John Devices</li>
                                <li> ema-John Tours</li>
                            </nav>
                        </div>
                        <div className="col-md-3">
                            <h5>Make Money with Us</h5>
                            <nav>
                                <li> Sell on ema-John</li>
                                <li> Sell Your Services on ema-John</li>
                                <li> Sell on ema-John Business</li>
                                <li> Sell Your Apps on ema-John</li>
                                <li> Become an Affiliate</li>
                                <li> Advertise Your Products</li>
                                <li> Self-Publish with Us</li>
                            </nav>
                        </div>
                        <div className="col-md-3">
                            <h5>ema-John Payment Products</h5>
                            <nav>
                                <li> ema-John Business Card</li>
                                <li> Shop with Points</li>
                                <li> Reload Your Balance</li>
                                <li> ema-John Currency Converter</li>
                            </nav>
                        </div>
                        <div className="col-md-2">
                            <h5>Let Us Help You</h5>
                            <nav>
                                <li>Your Account</li>
                                <li>Your Orders</li>
                                <li>Shipping Rates & Policies</li>
                                <li>Returns & Replacements</li>
                                <li>Manage Your Content and Devices</li>
                                <li>ema-John Assistant</li>
                                <li>Help</li>
                            </nav>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <div className="footer-mid">
                <div className="mid-box-img">
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <p><small><FontAwesomeIcon icon={faLanguage}/> English</small></p>
                </div>
                <div>
                    <p><small>$ BDT - TAKA</small></p>
                </div>
                <div>
                    <p><small><FontAwesomeIcon icon={faGlobe}/> Bangladesh</small></p>
                </div>
            </div>
            <div className="footer-last">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <p>
                            <small>ema-John Music</small><br/>
                            <small className="gry">Stream millions<br/>of songs</small>
                            </p><br/><br/>
                            <p>
                            <small>ema-John Business</small><br/>
                            <small className="gry">Everything for<br/>your business</small>
                            </p><br/><br/>
                            <p>
                            <small>Book Depository</small><br/>
                            <small className="gry">Books With Free<br/>Delivery Worldwide</small>
                            </p><br/><br/>
                            <p>
                            <small>Goodreads</small><br/>
                            <small className="gry">Book reviews &<br/>recommendations</small>
                            </p><br/><br/>
                        </div>
                        <div className="col-md-2">
                        <p>
                            <small>ema-John Advertising</small><br/>
                            <small className="gry">Find, attract, and<br/>engage customers</small>
                            </p><br/><br/>
                            <p>
                            <small>ema-John Global</small><br/>
                            <small className="gry">Ship Orders<br/>Internationally</small>
                            </p><br/><br/>
                            <p>
                            <small>Box Office Mojo</small><br/>
                            <small className="gry">Find Movie<br/>Box Office Data</small>
                            </p><br/><br/>
                            <p>
                            <small>IMDb</small><br/>
                            <small className="gry">Movies, TV<br/>& Celebrities</small>
                            </p><br/><br/>
                        </div>
                        <div className="col-md-2">
                        <p>
                            <small>ema-John Drive</small><br/>
                            <small className="gry">Cloud storage<br/>from ema-John</small>
                            </p><br/><br/>
                            <p>
                            <small>Home Services</small><br/>
                            <small className="gry">Handpicked Pros<br/>Happiness Guarantee</small>
                            </p><br/><br/>
                            <p>
                            <small>ComiXology</small><br/>
                            <small className="gry">Thousands of<br/>Digital Comics</small>
                            </p><br/><br/>
                            <p>
                            <small>IMDbPro</small><br/>
                            <small className="gry">Get Info Entertainment<br/>Professionals Need</small>
                            </p><br/><br/>
                        </div>
                        <div className="col-md-2">
                        <p>
                            <small>6pm</small><br/>
                            <small className="gry">Score deals on<br/>fashion brands</small>
                            </p><br/><br/>
                            <p>
                            <small>ema-John Ignite</small><br/>
                            <small className="gry">Sell your original<br/>Digital Education <br/>Resources</small>
                            </p><br/>
                            <p>
                            <small>CreateSpace</small><br/>
                            <small className="gry">Indie Print<br/>Publishing</small>
                            </p><br/><br/>
                            <p>
                            <small>Neighbors App</small><br/>
                            <small className="gry">Real-Time Crime<br/>& Safety Alerts</small>
                            </p><br/><br/>
                        </div>
                        <div className="col-md-2">
                        <p>
                            <small>ema-John Books</small><br/>
                            <small className="gry">Books, art<br/>& collectibles</small>
                            </p><br/><br/>
                            <p>
                            <small>ema-John Rapids</small><br/>
                            <small className="gry">Fun stories for<br/>kids on the go</small>
                            </p><br/><br/>
                            <p>
                            <small>DPReview</small><br/>
                            <small className="gry">Digital <br/>Photography</small>
                            </p><br/><br/>
                            <p>
                            <small>Prime Video Direct</small><br/>
                            <small className="gry">Video Distribution<br/>Made Easy</small>
                            </p><br/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
            <div className="rights">
            <small>All rights reserved @2020 ema-John</small>
            </div>
        </div>
    );
};

export default Footer;