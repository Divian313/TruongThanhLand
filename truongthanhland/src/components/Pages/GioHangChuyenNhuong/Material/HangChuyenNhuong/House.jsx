import React from 'react';
import { Link } from 'react-router-dom';
const House = (props) => {
    return (
        <div className="card">
            
            <Link style={{textDecoration: 'none', color: "black"}} to="/">
                
            <img style={{width: "100%"}} src={props.image} alt="" srcset="" />
            </Link>
            
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