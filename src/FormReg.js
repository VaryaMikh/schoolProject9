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

class FormReg extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatpassword: '',
      formErrors: {email: '', password: '', repeatpassword: ''},
      emailValid: false,
      passwordValid: false,
      repeatpasswordValid: false,
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
    let repeatpasswordValid = this.state.passwordValid;

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

        if (value === this.state.repeatpassword) {
          repeatpasswordValid = true;
          fieldValidationErrors.repeatpassword = '';
        } else {
          repeatpasswordValid = false;
          fieldValidationErrors.repeatpassword = 'Пароли не совпадают';
        }

        break;

      case 'repeatpassword':
          if (value === this.state.password) {
            repeatpasswordValid = true;
            fieldValidationErrors.repeatpassword = '';
          } else {
            repeatpasswordValid = false;
            fieldValidationErrors.repeatpassword = 'Пароли не совпадают';
          }

        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    repeatpasswordValid: repeatpasswordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.repeatpasswordValid});
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
                <div className={`form-group ${this.errorClass(this.state.formErrors.repeatpassword)}`}>
                    <label htmlFor="repeatpassword">Повторите пароль</label>
                    <input type="password" className="form-control" name="repeatpassword"
                        placeholder="Повторите пароль"
                        value={this.state.repeatpassword}
                        onChange={this.handleUserInput}  />
                </div>
                {this.state.formValid ? 
                  <Link to="/datainput"><Button variant="primary">Зарегистрироваться</Button></Link> : 
                  <Button variant="danger">Зарегистрироваться</Button>}
                <Link to="/login"><Button variant="primary">Войти</Button></Link>
            </form>
        </Styles>
    )
  }
}

export default FormReg; 