import { React } from 'react';

import { Button, Card, Container, Form, Dropdown } from 'react-bootstrap';
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

export const DataInput = () => (
    <>
        <Styles style={{backgroundColor: '#e8e8e8'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Страница ввода медицинских данных</Card.Title>
                        <Card.Text>
                            Введите данные о вашем самочувствии в следующих полях:
                        </Card.Text>
                        
                        <Form>
                            <Form.Group controlId="fromBasicTemperature">
                                <Form.Control type="temperature" placeholder="Темература"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicСondition" style={{marginTop: '2%'}}>
                                <Form.Control type="condition" placeholder="Общее состояние"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicCheckBox" style={{marginTop: '4%', display: 'flex', justifyСontent: 'space-between'}}>
                                <Link to="/output"><Button variant="secondary">Отправить</Button></Link>
                            </Form.Group>
                        </Form>
                
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)