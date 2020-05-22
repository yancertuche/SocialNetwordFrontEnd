import React, { Component } from "react";
import {useHistory} from 'react-router';
import './ExploreContainer.css';
import './FormLogin.scss';



const FormLogin : React.FC = ()=>{    
    
    const history= useHistory();
    
    const HandleSubmit = () =>{
        console.log("llegue")
        history.push('principal')
    }
        return (
          <div className="container"> 
            <div className='logo'>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/e/e8/PUJ-Logo-vertical.png'} alt='logo'></img>
            </div>
            <form>
                <h3 className="title">Iniciar sesión - JAVERED</h3>
                <h5 className="title">¡Encuentra tus cursos favoritos!</h5>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Correo Institucional" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordar datos</label>
                    </div>
                </div>

                <button type='submit' onClick={HandleSubmit} className="btn btn-primary btn-block">Iniciar sesión</button>

                <p className="forgot-password text-right">
                    ¿Olvidaste la Contraseña? <a href="https://google.com">Click Aqui</a>
                </p>
            </form>
          </div>
        )
}

export default FormLogin;