import React from 'react';
import Intro from '../intro/intro';
// import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return(
        <div className="home">
            <Intro titulo="Yessica Ledezma Borja" />            
    
            {/* <Link to="/contacto">Contáctame</Link> */}
        </div>
    );
}

export default Home;
