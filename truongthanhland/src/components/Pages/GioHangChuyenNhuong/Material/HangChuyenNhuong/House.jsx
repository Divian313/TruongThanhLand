import React from 'react';

const House = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="" srcset="" />
            <div className="card-body">
                
                <h5 className="card-title">{props.address}</h5>
                <p className="card-text">Floors: {props.floors}</p>
                <p className="card-text">Area: {props.area}</p>
                <p className="card-text">Price: {props.price}</p>
            </div>
        </div>
    );
}

export default House;