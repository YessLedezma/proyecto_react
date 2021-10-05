import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Personaje from '../personaje/personaje';
import './api.css';

const Api = () => {
    const [personajes, setPersonajes] = useState();

        useEffect(() => 
            fetch('https://hp-api.herokuapp.com/api/characters')
            .then(response => 
                response.json()
            )
            .then(personajes => 
                setPersonajes(personajes)
            )
        );

    return(
        <div className="header">
            <Container>
                {personajes ?
                <Row>
                    {personajes.map((item, i) =>
                        <Personaje index={i} personaje={item} />
                    )}
                </Row>
                : <div className="characters">Here are the main characters of the Harry Potter saga. <br></br> Loading ...</div>}
            </Container>
        </div>
    );
}

export default Api;