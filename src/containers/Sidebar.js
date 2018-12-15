import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <div>
            <div className="well sidebar-nav">
                <ul className="nav nav-list">
                    <li className="nav-header">Paciente</li>
                    <li>
                        <NavLink to={"/pacientes/registrar"}>
                            Registrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/pacientes"}>
                            Listar
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Sidebar;