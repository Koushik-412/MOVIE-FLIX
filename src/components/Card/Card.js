import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Card_placeholder from './Card_placeholder';
import "./Card.css"

const Card = ({ movie }) => {
    const navigate=useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 3000)
    },[])

    return (
        <>
            {
                    (!isLoading)
                    ?
                    <Card_placeholder />
                    :
                    <>
                                <img className="card-img-top cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                                <div className="card-body text-light" style={{position: "relative"}}>
                                    <h5 className="card-title mt-3">{movie ? movie.original_title : ""}</h5>
                                    <h6 className='card-text'>{movie ? movie.release_date : ""}</h6>
                                    <p className="card__rating">{movie ? movie.vote_average : ""} ☆</p>
                                    <p className="card-text d-none d-lg-block">{movie ? movie.overview.slice(0, 118) + "..." : ""}</p>
                                    <button className="btn button-color text-light" onClick={()=>{navigate(`/movie/${movie.id}`)}}>Watch Details</button>
                                </div>
                    </>
            }
        </>
    );
};

export default Card;