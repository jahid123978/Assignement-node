import initializeAuthentication from "../Firebase/Firebase.init";
import {onAuthStateChanged, signOut, updateProfile, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const RegisterNewUser = (name, email, password, history) =>{
    
   createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
         // Signed in 
         // const user = userCredential.user;
         
         const newUser = {displayName: name, email}
         
        
         .then(()=>{

         })
         .catch((error)=>{

         })
          history.replace('/home');
       })
       .catch((error) => {
         // const errorCode = error.code;
         const errorMessage = error.message;
       
       })
       
 }
