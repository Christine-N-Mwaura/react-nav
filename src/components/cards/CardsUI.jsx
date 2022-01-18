import React from 'react';

import './card-style.css';

const Card = props => {
    return (  
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="image1" srcset="" className="card-img-top"/>
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text card-text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quo nulla quos blanditiis sed reiciendis dignissimos assumenda 
                    perferendis voluptas voluptatem ipsam.
                </p>
                <a href="#" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>
    );
}
 
export default Card;