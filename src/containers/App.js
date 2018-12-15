import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Topbar from './Topar';
import { Route, Switch } from 'react-router-dom';
import TablaPaciente from './paciente/TablaPaciente';
import FormularioRegistroPaciente from '../components/paciente/FormularioRegistroPaciente';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <Topbar/>
       <div className="container-fluid">
        <div className="row-fluid">
          <div className="span3">
            <Sidebar/>
          </div>
          <div className="span9">
            <Switch>
              <Route path="/pacientes/editar/:id" component={FormularioRegistroPaciente}/>
              <Route path="/pacientes/registrar" component={FormularioRegistroPaciente}/>
              <Route path="/pacientes" component={TablaPaciente}/>
            </Switch>
          </div>
        </div>
       <hr/>
       <Footer/>
       </div>
      </div>
    );
  }
}

export default App;
