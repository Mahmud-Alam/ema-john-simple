import React from 'react';
import Auth from './useAuth';
import logo from '../../images/logo1.png';
import googleLogo from '../../images/google.png'
import './Login.css'
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faFacebookF, faGooglePlus, faLinkedin, faLinkedinIn, faGooglePlusG, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

library.add(fab,faCheckSquare, faCoffee, faFacebook,faFacebookF,faGooglePlus,faGoogle, faLinkedin,faLinkedinIn)

const Login = () => {
    const auth = Auth();

    const customSignUpHandler =()=>{
        document.getElementById('containerr').classList.add('right-panel-active')
    }

    const customSignInHandler =()=>{
        document.getElementById('containerr').classList.remove('right-panel-active')
    }

    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            console.log(res);
            window.location.pathname = '/review';
        })
    }
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        })
    }

    return (
        <div className="login-area">
            <div className="containerr" id="containerr">
                <div className="form-container sign-up-container">
                    {/* <form action=""> */}
                    <div className="form">
                        <h1>Create Account</h1><span className="hr"></span>
                        {/* <div className="social-container">
                            <a href="" className="social"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
                            <a href="" className="social"><FontAwesomeIcon icon={['fab', 'google']}/></a>
                            <a href="" className="social"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/></a>
                        </div>
                        <span>&#8213; or use your email for Sign Up &#8213;</span> */}
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                        <button>Sign Up</button><br/>
                        <div className="hr-or">
                            <hr/>
                            <h6 style={{color:'grey'}}>or</h6>
                            <hr/>
                        </div>
                        <div className="social-container">
                            {/* <a href="" className="social"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
                            <a href="" className="social"><FontAwesomeIcon icon={['fab', 'google']}/></a>
                            <a href="" className="social"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/></a> */}
                            {/* <button className="withGoogle"><span><img src={googleLogo} alt=""/></span> Sign up with Google</button> */}
                            {
                                auth.user ? <button className="withGoogle" onClick={handleSignOut}><span><img src={googleLogo} alt=""/></span> Sign Up with Google</button>
                                : <button className="withGoogle" onClick={handleSignIn}><span><img src={googleLogo} alt=""/></span> Sign Up with Google</button>
                            } 
                            
                        </div>
                        <p className="termsTag"><small>By creating an account, you agree to our <br/><span className="termsSpan">Terms and Conditions</span> and <span className="termsSpan">Data Policy</span>.</small></p>
                    </div>
                    {/* </form> */}
                </div>
                <div className="form-container sign-in-container">
                    <div className="form">
                        <h1>Sign in</h1><span className="hr"></span>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <a href="">Forgot your password?</a>
                        <button>Sign In</button><br/>
                        <div className="hr-or">
                            <hr/>
                            <h6 style={{color:'gray'}}>or</h6>
                            <hr/>
                        </div>
                        <div className="social-container">
                            {
                                auth.user ? <button className="withGoogle" onClick={handleSignOut}><span><img src={googleLogo} alt=""/></span> Sign In with Google</button>
                                : <button className="withGoogle" onClick={handleSignIn}><span><img src={googleLogo} alt=""/></span> Sign In with Google</button>
                            }
                        </div>
                        <p className="termsTag"><small>By sign in, you agree to our <br/><span className="termsSpan">Terms and Conditions</span> and <span className="termsSpan">Data Policy</span>.</small></p>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <img src={logo} alt=""/>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please Sign in with your personal info.</p>
                            <button onClick={customSignInHandler} className="ghost" id="signIn">Sign In</button>
                            <Link className="back-to-home" to="/">&#8213; Back to Home &#8213;</Link>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <img src={logo} alt=""/>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us.</p>
                            <button onClick={customSignUpHandler} className="ghost" id="signUp">Sign Up</button>
                            <Link className="back-to-home" to="/">&#8213; Back to Home &#8213;</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* {
                auth.user ? <button onClick={handleSignOut}>Sign out</button> :
                <button onClick={handleSignIn}>Sign in with Google</button>
            }   */}
            <p><small style={{color:'white'}}>All rights reserved @2020 ema-john.com</small></p>
        </div>
    );
};

export default Login;