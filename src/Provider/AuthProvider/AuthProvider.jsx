import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './../../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const GoogleProvider  = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = ()=>{
        return signInWithPopup( auth,GoogleProvider)
    }
    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name,photoUrl) =>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photoUrl
          })   
    }

    useEffect(()=>{
        const unSubsCribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            
            if(currentUser){
                const userInfo = {email: currentUser.email}
                // get token 
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                   if(res.data.token){
                    localStorage.setItem('access-token' ,res.data.token)
                   }
                })
            }
            else{
                // Todo: remove token 
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=>{
            return unSubsCribe()
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;