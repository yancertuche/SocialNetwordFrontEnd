import React, { Component } from "react";
import './ExploreContainer.css';

export default class FormLogin extends Component {
    render() {
        return (
          <div className="container"> 
            <img src='../' />
            <form>
                <h3>Ingresar - JaveRed</h3>
                <h5>JaveRed, la plataforma para encontrar tus cursos favoritos</h5>

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

                <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>

                <p className="forgot-password text-right">
                    ¿Olvidaste la Contraseña? <a href="#">Click Aqui</a>
                </p>
            </form>
          </div>
        );
    }
}