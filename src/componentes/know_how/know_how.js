import React from 'react';
import './know_how.css'
import { Container } from 'react-bootstrap';
import iconY from '../intro/yma.png'
import icon1 from './html5.svg';
import icon2 from './css3-alt.svg';
import icon3 from './bootstrap.svg';
import icon4 from './js.svg';
import icon5 from './react.svg';
import icon6 from './nodejs.svg';
import icon7 from './git.svg';

const Know_how = () => {
    return(
        <header>
            <div>
                <img src={iconY} className='iconY' alt="Foto de Yma"/>
            </div>
            <div>
                <p className="color">
                    Estas son las tecnologías que estoy aprendiendo en el curso de Desarrollo Web Full Stack con Media Chicas:
                </p>
            </div>
            <Container>
                <div className="d-flex">
                    <div className="card-m4" style={{width: "100px"}}>
                        <img src={icon1} className="card-img-top" alt="Maquetado Web" />
                        <div class="card-body">
                            <p class="card-text">Maquetado Web</p>
                        </div>
                    </div>
                    <div className="card-m4" style={{width: "110px"}}>
                        <img src={icon2} className="card-img-top" alt="Estilos" />
                        <div class="card-body">
                            <p class="card-text">Estilos</p>
                        </div>
                    </div>
                    <div className="card-m4" style={{width: "90px"}}>
                        <img src={icon3} className="card-img-top" alt="Frameworks" />
                        <div class="card-body">
                            <p class="card-text">Frameworks</p>
                        </div>
                    </div>
                    <div className="card-m4" style={{width: "100px"}}>
                        <img src={icon4} className="card-img-top" alt="Scripting" />
                        <div class="card-body">
                            <p class="card-text">Scripting</p>
                        </div>
                    </div>
                    <div className="card-m4" style={{width: "100px"}}>
                        <img src={icon5} className="card-img-top" alt="Librerías" />
                        <div class="card-body">
                            <p class="card-text">Librerías</p>
                        </div>
                    </div>
                    <div className="card-m4" style={{width: "130px"}}>
                        <img src={icon6} className="card-img-top" alt="Del lado del servidor" />
                        <div class="card-body">
                            <p class="card-text">Del lado del servidor</p>
                        </div>
                    </div>
                    <div className="card-m4" style={{width: "120px"}}>
                        <img src={icon7} className="card-img-top" alt="Control de versiones" />
                        <div class="card-body">
                            <p class="card-text">Control de versiones</p>
                        </div>
                    </div>

                </div>    
            </Container>
        </header>
    );
}

export default Know_how;