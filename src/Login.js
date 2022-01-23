import { React } from 'react';

import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';
import FormLogin from './FormLogin' 

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`
export const Login = () => (
    <>
        <Styles style={{color: '#515151'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Страница входа</Card.Title>
                        <Card.Text>
                            Вам необходимо указать email адресс и пароль, нажать кнопку войти для входа в систему мониторинга состояния.
                        </Card.Text>
                        <FormLogin /> 
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)