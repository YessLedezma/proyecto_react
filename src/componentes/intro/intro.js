import React from 'react';
import './intro.css';
import icon from './yma.png';

const Intro = ({titulo}) => {
    return(
        <header>
            <div>
                <img src={icon} className='icon' alt="Foto de Yma"/>
            </div>
            <div>
                <h1>{titulo}</h1>
            </div>
            <div>
                <p>Ingeniera de Telecomunicaciones / Certificación Scrum Master / Analista de Ciberseguridad / <br></br>  Analista de Implementación de Software / Estudiante Desarrollo Web FullStack /</p>
            </div>
        </header>
    );
}

export default Intro; 