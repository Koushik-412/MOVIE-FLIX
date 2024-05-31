import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Slider = ({page,changeToggle,total}) => {
    const {type}=useParams();
    const [counter,setCounter]=useState(1);
    useEffect(()=>{
        const value= page*counter;
        // console.log("start",value - page);
        // console.log("end",value);
        changeToggle(value - page, value);
    },[counter]) 

    useEffect(()=>{
        setCounter(1);
    },[type])

    const buttonClick=(type)=>{
        if(type==="prev"){
            if(counter===1){
                setCounter(1);
            }else{
                setCounter(counter-1);
            }
        }
        else if(type==="next"){
            if(counter===Math.ceil(total/page)){
                setCounter(counter);
            }
            else{
                setCounter(counter+1);
            }
        }
    }
    return (
        <>
            <div className="row justify-content-around d-flex mb-3">
                <div className="col-4 col-lg-2">
                    <button className="btn btn-primary" onClick={()=>buttonClick("prev")}>prev</button>
                </div>
                <div className="col-4 col-lg-2">
                    <h1 className="text-center" style={{color:"white"}}>{counter}</h1>
                </div>
                <div className="col-4 col-lg-2">
                    <button className="btn btn-primary" onClick={()=>buttonClick("next")}>next</button>
                </div>
            </div>
        </>
    );
};

export default Slider;