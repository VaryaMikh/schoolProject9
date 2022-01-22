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
        <Styles style={{backgroundColor: '#f9ffda'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Страница входа</Card.Title>
                        <Card.Text>
                            Вам необходимо войти для входа в систему медицинских услуг.
                        </Card.Text>
                        <FormLogin />
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)