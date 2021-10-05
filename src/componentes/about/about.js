import React from 'react';
import './about.css';
import iconY from '../intro/yma.png'
import { Container } from 'react-bootstrap';

const About = () => {
    return(
        <header>
            <div>
                <img src={iconY} className='iconY' alt="Foto de Yma"/>
            </div>
            <Container className="text">
                <p className="color">Hola, soy Yessica. Barranquillera de 35 años, tía de Santiago y amante de la lectura. <br></br>Estoy feliz de hacer parte de este espacio de inclusión para las mujeres en tecnología con Media Chicas.<br></br> En pocas semanas iniciaré con un nuevo proyecto laboral, que aportará a mi crecimiento profesional en el área de Ciberseguridad. <br></br> Tengo experiencia en implementación de software en el ámbito judicial, aseguramiento de la calidad de procesos y servicios (contact center), soporte técnico y atención al cliente; además, tengo conocimiento en gestión e implementación de proyectos utilizando metodologías ágiles.</p>

                {/* <p>Mis skills: análisis, aprendizaje rápido, colaboración efectiva con equipos, liderazgo, innovación, trabajo en equipo, orientación al detalle, adaptación al cambio, resolución de problemas e implementación de soluciones, toma de decisiones y orientación al cumplimiento de las metas de productividad, y al logro de los resultados definidos por la empresa o proyecto. </p> */}
            </Container>
        </header>
    );
}

export default About;