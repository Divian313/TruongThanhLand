import React from 'react';
import { Link } from 'react-router-dom';
const House = (props) => {
    return (
        <div className="card">
            
            <Link style={{textDecoration: 'none', color: "black"}} to="/">
                
            <img style={{width: "100%"}} src={props.image} alt="" srcset="" />
            </Link>
            
            <div className="card-body">
                
                <h5 className="card-title">{props.diachi}</h5>
                <p className="card-text">Floors: {props.sotang}</p>
                <p className="card-text">Area: {props.dientich}</p>
                <p className="card-text">Price: {props.mucgia}</p>
            </div>
        </div>
    );
}

export default House;