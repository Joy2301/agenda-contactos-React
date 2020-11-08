import React, { Component } from 'react'
//import PropTypes from 'prop-types';

import Contacto from './contacto'

/*La unica finalidad de este componente es listar todas los contactos */
export default class Contactos extends Component {
    render() {
        /*Se recorre el arreglo de contactos tomada del atributo en "app.js"
        y por cada recorrido se obtiene un elemento (un unico contacto) */
        return this.props.contactos.map(elementos =>
            <Contacto
            contacto = {elementos}
            key = {elementos.id}
            deleteContacto = {this.props.deleteContacto}
            />)
    }
}

/*Com PropTypes puedo hacer una pequeña validacion 
para asegurarme de escribir el tipo de dato correcto


Contactos.propTypes = {
    contacto: PropTypes.array.isRequired
}*/
