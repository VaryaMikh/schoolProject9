import React, { Component } from 'react';

import { FormErrors } from './FormErrors';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`

class FormLogin extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
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
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          emailValid = true;
          fieldValidationErrors.email = '';
        } else {
          emailValid = false;
          fieldValidationErrors.email = 'Email неверен';
        }        
        break;

      case 'password':
        if (value.length >= 6) {
          passwordValid = true;
          fieldValidationErrors.password = '';
        } else {
          passwordValid = false;
          fieldValidationErrors.password = 'Пароль должен быть не менее 6 символов';
        }

        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
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
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email</label>
                    <input type="email" required className="form-control" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" name="password"
                        placeholder="Пароль"
                        value={this.state.password}
                        onChange={this.handleUserInput}  />
                </div>
                {this.state.formValid ? 
                  <Link to="/datainput"><Button variant="primary">Войти</Button></Link> : 
                  <Button variant="danger">Войти</Button>}
                <Link to="/reg"><Button variant="primary">Зарегистрироваться</Button></Link>
                <Link to="/password"><Button variant="primary">Забыли пароль?</Button></Link>
            </form>
        </Styles>
    )
  }
}

export default FormLogin; 