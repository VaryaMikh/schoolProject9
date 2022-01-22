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

function FormLogin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({email: '', password: '', auth: ''});
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [authValid, setAuthValid] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [authenticated, setAuthenticated] = useGlobalState('authenticated');

    let history = useHistory();

    const handleLogin = (e) => {
        if (password==='123456') {
            history.push('/datainput');
            setAuthenticated(true);
        } else {
            setAuthValid(false);
            let errors = formErrors;
            formErrors.auth='Неверный email или пароль';
            setFormErrors(formErrors);
            validateForm(passwordValid, emailValid);
        }
    }


    const handleEmailInput = (e) => {
        const { name, value } = e.target;
        let isValid=false;

        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setEmailValid(true);
            isValid = true;
            formErrors.email = '';
        } else {
            setEmailValid(false);
            isValid = false;
            formErrors.email = 'Email неверен';
        }
        setEmail(prevState => value);
        validateForm(isValid, passwordValid);
    }

  const handlePasswordInput = (e) => {
      const { name, value } = e.target;
      let isValid=false;

      if (value.length >= 6) {
          setPasswordValid(true);
          isValid = true;
          formErrors.password = '';
      } else {
          setPasswordValid(false);
          isValid = false;
          formErrors.password = 'Пароль должен быть не менее 6 символов';
      }
      setPassword(prevState => value);
      validateForm(isValid, emailValid);
  }

  const validateForm = (s1,s2)=> {
    setFormValid(prevState => s1 && s2);
  }

  const errorClass = (error) => {
     return(error.length === 0 ? '' : 'has-error');
  }

  return(
      <Styles>
          <form>
              <div className="panel panel-default">
                  <FormErrors formErrors={formErrors} />
              </div>
              <div className={'form-group ${errorClass(formErrors.email)}'}>
                  <label htmlFor="email">Email</label>
                  <input type="email" required className="form-control" name="email"
                         placeholder="Email"
                         value={email}
                         onChange={handleEmailInput}  />
              </div>
              <div className={'form-group ${errorClass(formErrors.password)}'}>
                  <label htmlFor="password">Пароль</label>
                  <input type="password" className="form-control" name="password"
                         placeholder="Пароль"
                         value={password}
                         onChange={handlePasswordInput}  />
              </div>
              {formValid ?
                  <Button variant="primary" onClick={handleLogin}>Войти</Button>:
                  <Button variant="danger">Войти</Button>}
              <Link to="/reg"><Button variant="primary">Зарегистрироваться</Button></Link>
              <Link to="/password"><Button variant="primary">Забыли пароль?</Button></Link>
          </form>
      </Styles>
  );
}

export default FormLogin;
