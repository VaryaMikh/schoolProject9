import { React } from 'react';

import { Button, Card, Container, Form } from 'react-bootstrap';
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
                        <Form>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Control type="email" placeholder="Email"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassward" style={{marginTop: '2%'}}>
                                <Form.Control type="passward" placeholder="Пароль"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicCheckBox" style={{marginTop: '4%', display: 'flex', justifyСontent: 'space-between'}}>
                                <Link to="/datainput"><Button variant="warning">Войти</Button></Link>
                                <Link to="/reg"><Button variant="warning">Зарегистрироваться</Button></Link>
                                <Button variant="link"><Link to="/password">Забыли пароль?</Link></Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)