import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";
import { Route,Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export  const AuthContextProvider = (props) =>{
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
//auth er akta hook banaia felsi

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

const getUser = user => {
    const {displayName, email, photoURL} = user;
    const shortenUser = {name: displayName, email, photo: photoURL};
    return shortenUser;
}


const Auth = () => {

    const [user, setUser] = useState(null); //surute user nai tai null

    const signInWithGoogle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const signedInUser = getUser(res.user);
            // console.log(res.user)
            setUser(signedInUser);
            return res.user;
        })
        .catch(err=>{
            setUser(null);
            //user set na hole null thakbe
            return err.message;
        });
    }
    const signOut =()=>{
        return firebase.auth().signOut()
        .then(res => {
          const signedOutUser = {
            isSignedIn: false, 
            name: '',
            phot:'',
            email:'',
            password:'',
            error:'',
            isValid:false,
          }
            setUser(signedOutUser);
            // console.log(res);
            return true;
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
            // console.log(error);
            return false;
          });
    }

    /* email password */

    
  
    
    /* end email password */

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
              // User is signed in.
              const currUser = getUser(usr);
              setUser(currUser);
            } else {
              // No user is signed in.
            }
          });
    },[]);

    return {
        user,
        signInWithGoogle,
        signOut
    }
}

export default Auth;