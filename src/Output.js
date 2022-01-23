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
        <Styles style={{color: '#515151'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Результаты отправлены</Card.Title>
                        <Card.Text>
                            Спасибо за предоставленные данные. Они помогут лечащему врачу назначить верный курс лечения.
                        </Card.Text>
                        <Card.Text>
                            Будем ждать вас снова.
                        </Card.Text>
                        <Form>
                            <Form.Group controlId="fromBasicCheckBox" style={{marginTop: '4%', display: 'flex', justifyСontent: 'space-between'}}>
                                <Link to="/"><Button style={{backgroundColor: '#6c537a', borderColor: '#6c537a'}}>Отправить данные снова</Button></Link>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)