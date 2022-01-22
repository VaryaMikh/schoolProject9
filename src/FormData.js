import React, {Component, useState} from 'react';

import { FormErrors } from './FormErrors';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
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

function FormData(props) {
  const [temperature, setTemperature] = useState('');
  const [personState, setPersonState] = useState('');
  const [formErrors, setFormErrors] = useState({temperature: '', personState: ''});
  const [temperatureValid, setTemperatureValid] = useState(false);
  const [personStateValid, setPersonStateValid] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [authenticated, setAuthenticated] = useGlobalState('authenticated');

  let history = useHistory();

  const handleTemperatureInput = (e) => {
    const { name, value } = e.target;
    let isValid=false;

    if (! value.match(/^[+-]?([0-9]*[.])?[0-9]+$/i)) {
        setTemperatureValid(false);
        isValid = false;
        formErrors.temperature = 'Ожидается число';
    } else if (parseFloat(value) >= 42 || parseFloat(value) <= 35){
        setTemperatureValid(false);
        isValid = false;
        formErrors.temperature = 'Вы умерли. Нет смысла передавать значения.';
    }  else {
        setTemperatureValid(true);
        isValid = true;
        formErrors.temperature = '';
    }      
    setTemperature(prevState => value);
    validateForm(isValid, personStateValid);
  }

  const handlePersonStateInput = (e) => {
    const { name, value } = e.target;
    let isValid=false;

    if (value.length >= 6) {
      setPersonStateValid(true);
      isValid = true;
      formErrors.personState = '';
    } else {
      setPersonStateValid(false);
      isValid = false;
      formErrors.personState = 'Слишком короткое описание состояния';
  }
    setPersonState(prevState => value);
    validateForm(isValid, temperatureValid);
  }

  const validateForm = (s1,s2)=> {
    setFormValid(prevState => s1 && s2);
  }

  const errorClass = (error) => {
     return(error.length === 0 ? '' : 'has-error');
  }
    if (authenticated) {
      return (
        <Styles>
            <form>
                <div className="panel panel-default">
                    <FormErrors formErrors={formErrors} />
                </div>
                <div className={`form-group ${errorClass(formErrors.temperature)}`}>
                    <label htmlFor="temperature">Температура</label>
                    <input type="temperature" required className="form-control" name="temperature"
                        placeholder="Температура"
                        value={temperature}
                        onChange={handleTemperatureInput}  />
                </div>
                <div className={`form-group ${errorClass(formErrors.personState)}`}>
                    <label htmlFor="personState">Общее состояние</label>
                    <input type="personState" className="form-control" name="personState"
                        placeholder="Общее состояние"
                        value={personState}
                        onChange={handlePersonStateInput}  />
                </div>
                
                {formValid ? 
                  <Link to="/output"><Button variant="primary">Отправить</Button></Link> :
                  <Button variant="danger">Отправить</Button>}
            </form>
        </Styles>
      )
    } else {
      history.push('/login');
      return (
        <></>
      )
    }
}
    

export default FormData; 