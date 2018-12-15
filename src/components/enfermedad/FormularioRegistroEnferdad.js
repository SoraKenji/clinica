import React, { Component } from 'react';
import Title from '../../containers/Title';

class FormularioRegistroEnfermedad extends Component {
render() {
    return (
    <div>
        <Title title="Registrar Enfermedad"/>
        <form class="producto form-horizontal">
            <fieldset>
                <div className="control-group">
                    <label className="control-label">Nombre</label>
                    <div className="controls">
                        <input className="input-xlarge" type="text" value=""/>
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-label">Año de descubrimiento</label>
                    <div className="controls">
                        <input className="input-xlarge" type="text" value=""/>
                    </div>
                </div>      
                <div class="control-group">
                    <label class="control-label">Auge</label>
                    <div class="controls">
                        <label class="checkbox">
                            <input type="checkbox" name="q" value="5"/>
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

export default FormularioRegistroEnfermedad;
