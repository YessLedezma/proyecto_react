import React from 'react';
import './contact.css';
import iconY from '../intro/yma.png'
import icon8 from './linkedin.svg';
import icon9 from './github.svg';
import icon10 from './twitter-sign.svg';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return(
        <header>
            <div>
                <img src={iconY} className='iconY' alt="Foto de Yma"/>
            </div>
            <div>
                <p className="color">
                    Puedes ver mi trayectoria profesional, mis proyectos o simplemente escribirme, en mis redes sociales:
                </p>
            </div>
            <Container className="redes">
                <div>
                    <a href="https://www.linkedin.com/in/yessica-ledezma-borja/">
                        <img style={{width: "50%"}} src={icon8} className='icon8' alt="Linkedin" />
                    </a> 
                </div>
                <div>                   
                    <a href="https://github.com/YessLedezma">
                        <img style={{width: "50%"}} src={icon9} className='icon9' alt="GitHub"/>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/YessLedezma">
                        <img style={{width: "50%"}} src={icon10} className='icon10' alt="Twitter"/>
                    </a>            
                </div>                
            </Container>
        </header>
    );
}

export default Contact;