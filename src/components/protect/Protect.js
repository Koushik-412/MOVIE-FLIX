import React,{ useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Protect = (props) => {
    const navigate=useNavigate();
    const {Component}=props
    useEffect(()=>{
    const data=localStorage.getItem("email")
    if(!data){
        navigate("/register")
    }
})
    return (
       <Component />
    );
};

export default Protect;