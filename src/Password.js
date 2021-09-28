import React from 'react';

import { Card, Container, Button, Form } from 'react-bootstrap';
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

export const newPassword = () => (
    <>
        <Styles style={{backgroundColor: '#daffdf'}}>
            <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ width: '40%' }}>
                    <Form>
                        <Card.Body>
                            <Card.Title>Страница сброса пароля</Card.Title>
                            <Card.Text>Забыли пароль?</Card.Text>
                            <Card.Text>Укажите свой email, под которым вы зарегистрированы на сайте и на него будет отправлена информация о воссстановлении пароля.</Card.Text>
                        </Card.Body>
                        <Form.Group controlId="fromBasicEmail" style={{ margin: '2%' }}>
                                <Form.Control type="email" placeholder="Email"/>
                                <Form.Text className="text-muted">Мы никогда не будем делиться вашей личной информацией.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckBox" style={{ margin: '2%', display: 'flex', justifyContent: 'space-between'}}>
                            <Link to="/"><Button variant="success">Отправить</Button></Link>
                            <Button variant="link"><Link to="/login">Вернуться назад</Link></Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
        </Styles>
    </>
)