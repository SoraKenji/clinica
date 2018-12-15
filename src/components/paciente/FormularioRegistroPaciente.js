import React, { Component } from 'react';
import Title from '../../containers/Title';

class FormularioRegistroPaciente extends Component {
    pacientes = [{id:1, rut: '17.343.989-k', nombre: 'C', edad: 25, prevision: 'Isapre'}];
    constructor(props)
    {
        super(props);
        this.state = {
            paciente:{id:-1, rut: '', nombre: '', edad: 0, prevision: ''}
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        
        const id = this.props.match.params.id;
        this.paciente = this.pacientes.find(c => c.id == id);
        if(typeof this.paciente !== 'undefined'){
            this.setState({ paciente: this.paciente });
        }
      }
      render() {
        return (
        <div className="col col-lg-6">
        <Title title="Ingresar paciente"/>
        <form className="producto form-horizontal">
            <fieldset>
                <div className="control-group">
                    <label className="control-label">RUT</label>
                    <div className="controls">
                        <input className="input-xlarge" type="text" 
                        onChange={this.handleChange} 
                        value={this.state.paciente.rut}/>
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label">Nombre</label>
                    <div className="controls">
                        <input className="input-xlarge" type="text" onChange={this.handleChange} value={this.state.paciente.nombre}/>
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label">Edad</label>
                    <div className="controls">
                        <input className="input-xlarge" type="text" onChange={this.handleChange} value={this.state.paciente.edad}/>
                    </div>
                </div>      
                <div className="control-group">
                    <label className="control-label">Previsión</label>
                    <div className="controls">
                        <label className="radio">
                            <input type="radio"/> Fonasa
                        </label>
                        <label className="radio">
                            <input type="radio"/> Isapre
                        </label>
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </div>
            </fieldset>
        </form>
    </div>
    );
  }
}

export default FormularioRegistroPaciente;
