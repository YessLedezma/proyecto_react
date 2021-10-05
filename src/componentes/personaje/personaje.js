import React from 'react';
import { Col } from 'react-bootstrap';

const Personaje = ({index, personaje}) => {
    return(
        <Col sm={3} key={index}>
            <img style={{width: "100%"}} src={personaje.image} alt="personaje" />
            <h3>{personaje.name}</h3>
            <p>{personaje.house}</p>
        </Col>      
    );
}

export default Personaje;