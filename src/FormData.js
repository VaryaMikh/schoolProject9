import React, { Component } from 'react';

import { FormErrors } from './FormErrors';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useGlobalState, getGlobalState} from "./state";

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`

class FormData extends Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: '',
      personState: '',
      formErrors: {temperature: '', personState: ''},
      temperatureValid: false,
      personStateValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let temperatureValid = this.state.temperatureValid;
    let personStateValid = this.state.personStateValid;

    switch(fieldName) {
      case 'temperature':
        if (! value.match(/^[+-]?([0-9]*[.])?[0-9]+$/i)) {
            temperatureValid = false;
            fieldValidationErrors.temperature = 'Ожидается число';
        } else if (parseFloat(value) >= 42 || parseFloat(value) <= 35){
            temperatureValid = false;
            fieldValidationErrors.temperature = 'Вы умерли. Нет смысла передавать значения.';
        }  else {
            temperatureValid = true;
            fieldValidationErrors.temperature = '';
        }      
        break;

      case 'personState':
        if (value.length >= 6) {
            personStateValid = true;
            fieldValidationErrors.personState = '';
        } else {
            personStateValid = false;
            fieldValidationErrors.personState = 'Слишком короткое описание состояния';
        }

        break;

      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    temperatureValid: temperatureValid,
                    personStateValid: personStateValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.temperatureValid && this.state.personStateValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
        <Styles>
            <form>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.temperature)}`}>
                    <label htmlFor="temperature">Температура</label>
                    <input type="temperature" required className="form-control" name="temperature"
                        placeholder="Температура"
                        value={this.state.temperature}
                        onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.personState)}`}>
                    <label htmlFor="personState">Общее состояние</label>
                    <input type="personState" className="form-control" name="personState"
                        placeholder="Общее состояние"
                        value={this.state.personState}
                        onChange={this.handleUserInput}  />
                </div>
                
                {this.state.formValid ? 
                  <Link to="/output"><Button variant="primary">Отправить</Button></Link> :
                  <Button variant="danger">Отправить</Button>}
            </form>
        </Styles>
    )
  }
}

export default FormData; 