import React, { Component } from 'react'
import ContactoNoFoto from './Img/ContactoNoFoto3.jpg';

import '../App.css'

export default class contacto extends Component {

    state = {
        nombre: this.props.contacto.nombre,
        numero: this.props.contacto.numero,
        email: this.props.contacto.email,
        disabled: true
    }

    //Cambiamos el valor de disabled cada que se usa esta funcion
    handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 

 //Solo cambiamos un poco el color y tamaño del boton al estar editando
  EstiloEditanto() {
    return {  
        color: this.state.disabled ? 'white' : '#c2c2c2',
        fontSize: this.state.disabled ? '0.9rem' : '1rem',
        border: "none",
        padding: "15px",
        align: "center",
        textDecoration: "none",
        background: "#008CBA"
    }
}
    //Evitamos el comportamiento por defecto del Form
    onSubmit = (e) => {
        e.preventDefault();
    }
    
    //Actualizamos el valor de los inputs cada que se presionan
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    //Diseñamos las tarjetas de contacto y llamamos las funciones donde corresponden
    render() {       
        const {contacto} = this.props;
        
        return (
            <div className="container" style={TarjetaContacto}>

                <div className="card" >
                    <img src={ContactoNoFoto} className="card-img-top" alt="ImagemContacto"/>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
                            <h5 className="card-title">Nombre</h5>
                            <div className="form-group row">
                            <input type="text"
                            id="nombre" 
                            onChange={this.onChange} 
                            name ="nombre" 
                            value={this.state.nombre}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">Numero</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="numero" 
                            value={this.state.numero}
                            disabled={(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">Correo Electronico</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="email" 
                            value={this.state.email}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <button type="submit" className="btn btn-secundary"
                                style={this.EstiloEditanto()}
                                onClick = {this.handleGameClik.bind(this)}>
                                Editar
                            </button>
                            {"  "}
                            <button className="btn btn-primary"
                                style={btnEliminar}
                                onClick = {this.props.deleteContacto.bind(this, contacto.id)}>
                                Eliminar
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

/*tambien puedo usar objetos de JavaScript para dar estilos
haciendolo asi tambien puedo cambiarlo dinamicamente usando una funcion
*/
const TarjetaContacto = {
    width: "20rem",
    margin: "2% 3% 1% 4%",
    display: "inline-block",
    align: "center"
}

const btnEliminar = {
    border: "none",
    color: "white",
    padding: "15px",
    align: "center",
    textDecoration: "none",
    background: "#f44336"
}
