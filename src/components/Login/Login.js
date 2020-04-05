import React from 'react';
import Auth from './useAuth';
import logo from '../../images/logo1.png';
import googleLogo from '../../images/google.png'
import './Login.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faFacebookF, faGooglePlus, faLinkedin, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

library.add(fab,faCheckSquare, faCoffee, faFacebook,faFacebookF,faGooglePlus,faGoogle, faLinkedin,faLinkedinIn)

const Login = () => {
    const auth = Auth();
    // console.log(auth.user);
    // console.log(auth);

    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photo: '',
        password:'',
        error:'',
        isValidEmail:true,
        isValidPassword:true,
      })

    //   console.log(user);

      const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
      const hasNumber = input => /\d/.test(input);
      
        const handleChange = e =>{
        const newUserInfo = {
          ...user
        };
        //debugger;
        // perform validation
        let isValidEmail = true;
        let isValidPassword = true;
        if(e.target.name === 'email'){
            isValidEmail = is_valid_email(e.target.value);
        //   console.log(isValidEmail)
        }
        if(e.target.name === "password"){
            isValidPassword = e.target.value.length > 7 && hasNumber(e.target.value);
        //   console.log(isValidPassword)
        }
    
        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValidEmail = isValidEmail;
        newUserInfo.isValidPassword = isValidPassword;
        // console.log(e.target.name);
        // console.log(e.target.value);
        // console.log(newUserInfo);
        // debugger;
        setUser(newUserInfo);
      }

    const customSignUpHandler =()=>{
        document.getElementById('containerr').classList.add('right-panel-active')
    }

    const customSignInHandler =()=>{
        document.getElementById('containerr').classList.remove('right-panel-active')
    }
    
    const createAccount = (event) => {
        if(user.isValidEmail && user.isValidPassword){
         firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            // console.log(res);
            const createdUser = {...user};
            createdUser.isSignedIn = true;
            createdUser.error = '';
            setUser(createdUser);
            // return createdUser;
            window.location.pathname = '/review';
          })
          .catch(err => {
            // console.log(err.message);
            const createdUser = {...user};
            createdUser.isSignedIn = false;
            createdUser.error = err.message;
            setUser(createdUser);
            // return err.message;
          })
        }
        event.preventDefault();
        event.target.reset();
      } 
    
      const signInUser = event => {
        if(user.isValidEmail && user.isValidPassword){
         firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            // console.log(res);
            const createdUser = {...user};
            createdUser.isSignedIn = true;
            createdUser.error = '';
            setUser(createdUser);
            // return createdUser;
            window.location.pathname = '/review';
          })
          .catch(err => {
            // console.log(err.message);
            const createdUser = {...user};
            createdUser.isSignedIn = false;
            createdUser.error = err.message;
            setUser(createdUser);
            // return err.message;
          })
        }
        event.preventDefault();
        event.target.reset();
      }
  

    const handleSignInWithGoogle = () => {
        auth.signInWithGoogle()
        .then(res => {
            // console.log(res);
            // console.log(res.user);
            // console.log(auth.user);
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
                    <div className="form">
                        <form onSubmit={createAccount}>
                            <h1>Create Account</h1><span className="hr"></span>
                            {/* <div className="social-container">
                                <a href="" className="social"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a>
                                <a href="" className="social"><FontAwesomeIcon icon={['fab', 'google']}/></a>
                                <a href="" className="social"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/></a>
                            </div>
                            <span>&#8213; or use your email for Sign Up &#8213;</span> */}
                            <input type="text" onBlur={handleChange} name="name" placeholder="Name" required/>
                            <input type="email" onBlur={handleChange} name="email" placeholder="Email" required/>
                            {
                                !user.isValidEmail && <p style={{color:'red',width:'250px' ,fontSize:'15px',padding:'0',margin:'0'}}>Your email is invalid!</p>
                            }
                            <input type="password" onBlur={handleChange} name="password" placeholder="Password" required/>
                            {
                                !user.isValidPassword && <p style={{color:'red',width:'250px' ,fontSize:'15px',padding:'0',margin:'0'}}>Password must contain 8 character and any number.</p>
                            }
                            <input className="login-button" type="submit" value="Create Account"/><br/>
                            {
                                user.error && <p style={{color:'red',width:'250px' ,fontSize:'15px',padding:'0',margin:'0'}}>{user.error}</p>
                            }                      
                        </form>
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
                                auth.user ? <button className="withGoogle" onClick={handleSignOut}><span><img src={googleLogo} alt=""/></span>Create with Google</button>
                                : <button className="withGoogle" onClick={handleSignInWithGoogle}><span><img src={googleLogo} alt=""/></span>Create with Google</button>
                            } 
                            
                        </div>
                        <p className="termsTag"><small>By creating an account, you agree to our <br/><span className="termsSpan">Terms and Conditions</span> and <span className="termsSpan">Data Policy</span>.</small></p>
                    </div>
                </div>
                <div className="form-container sign-in-container">
                    <div className="form">
                        <form onSubmit={signInUser}>
                            <h1>Sign-in Account</h1><span className="hr"></span>
                            <input type="email" onBlur={handleChange} name="email" placeholder="Email" required/>
                            {
                                !user.isValidEmail && <p style={{color:'red',width:'250px' ,fontSize:'15px',padding:'0',margin:'0'}}>Your email is invalid!</p>
                            } 
                            <input type="password" onBlur={handleChange} name="password" placeholder="Password" required/>
                            {
                                !user.isValidPassword && <p style={{color:'red',width:'250px' ,fontSize:'15px',padding:'0',margin:'0'}}>Your password is invalid!</p>
                            }
                            <a href="">Forgot your password?</a>
                            <input className="login-button" type="submit" value="Sign in"/><br/>
                            {
                                user.error && <p style={{color:'red',width:'250px' ,fontSize:'15px',padding:'0',margin:'0'}}>{user.error}</p>
                            }  
                        </form>
                        <div className="hr-or">
                            <hr/>
                            <h6 style={{color:'gray'}}>or</h6>
                            <hr/>
                        </div>
                        <div className="social-container">
                            {
                                auth.user ? <button className="withGoogle" onClick={handleSignOut}><span><img src={googleLogo} alt=""/></span> Sign In with Google</button>
                                : <button className="withGoogle" onClick={handleSignInWithGoogle}><span><img src={googleLogo} alt=""/></span> Sign In with Google</button>
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
                            <p>Already have an account?<br/>To keep connected with us please Sign in.</p>
                            <button onClick={customSignInHandler} className="ghost" id="signIn">Sign In</button>
                            <Link className="back-to-home" to="/">&#8213; Back to Home &#8213;</Link>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <img src={logo} alt=""/>
                            <h1>Hello, Friend!</h1>
                            <p>Don't have an account?<br/>Please create an account.</p>
                            <button onClick={customSignUpHandler} className="ghost" id="signUp">Create Account</button>
                            <Link className="back-to-home" to="/">&#8213; Back to Home &#8213;</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* {
                auth.user ? <button onClick={handleSignOut}>Sign out</button> :
                <button onClick={handleSignIn}>Sign in with Google</button>
            }   */}
        </div>
    );
};

export default Login;