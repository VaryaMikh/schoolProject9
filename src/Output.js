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
export const Output = () => (
    <>
        <Styles style={{backgroundColor: '#ffc5ed'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Результаты отправлены</Card.Title>
                        <Card.Text>
                            Спасибо, что воспользовались нашим сервисом оказания медицинских услуг.
                            Будем ждать вас снова.
                        </Card.Text>
                        <Form>
                            <Form.Group controlId="fromBasicCheckBox" style={{marginTop: '4%', display: 'flex', justifyСontent: 'space-between'}}>
                                <Link to="/"><Button variant="danger">Отправить данные снова</Button></Link>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)