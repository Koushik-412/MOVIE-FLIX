import React from 'react';
import "./Card.css"

const Card_placeholder = () => {
    return (
        <>
            <div class="card-group  placeholder-wave" >
                <div className='col-lg-12 col-sm-6 col-12 placeholder-wave bg-dark '>
                    <img className="placeholder  cards__img card-img-top " src="" />
                    <div className="card-body placeholder-wave">
                        <h5 className="card-title mt-3 placeholder-wave"> </h5>
                        <h6 className='card-text d-none d-lg-block placeholder-wave'>
                            <span className="card__rating d-none d-lg-block placeholder"> <span class="placeholder col-2"></span></span></h6>
                        <p className="card-text d-none d-lg-block placeholder-wave"><span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span></p>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Card_placeholder;