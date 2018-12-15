import React, { Component } from 'react';
import Title from '../../containers/Title';
import { NavLink } from 'react-router-dom'; 

class TablaPaciente extends Component {
    pacientes = [{id:1, rut: '17.343.989-k', nombre: 'C', edad: 25, prevision: 'Isapre'}];
    render() {
        return (
        <div>
            <Title title="Listar Pacientes"/>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>RUT</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Previsión</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.pacientes.map(paciente => {
                            return(
                            <tr key={paciente.rut}>
                                <td>{paciente.id}</td>
                                <td>{paciente.rut}</td>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.edad}</td>
                                <td>{paciente.prevision}</td>
                                <td>
                                    <NavLink to={`/pacientes/ver/${paciente.id}`}>Ver</NavLink>
                                    |
                                    <NavLink to={`/pacientes/editar/${paciente.id}`}>Editar</NavLink>
                                </td>
                            </tr>
                            )
                        })}         
                    </tbody>
                </table>
            </div>
            <p className="table-result-count">Se han encontrado {this.pacientes.length} resultado(s).</p>
        </div>
        );
    }
}

export default TablaPaciente;
