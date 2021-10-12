import { React } from 'react';

import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';
import FormReg from './FormReg';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`
export const Registr = () => (
    <>
        <Styles style={{backgroundColor: '#ffdada'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Страница регистрации</Card.Title>
                        <Card.Text>
                            Вам необходимо зарегистрироваться для входа в систему медицинских услуг.
                        </Card.Text>
                        <FormReg />
                        {/* <Form>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Control type="email" placeholder="Email"/>
                                <Form.Text className="text-muted">Мы никогда не будем делиться вашей личной информацией.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassward" style={{marginTop: '2%'}}>
                                <Form.Control type="passward" placeholder="Пароль"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicPassward" style={{marginTop: '2%'}}>
                                <Form.Control type="passward" placeholder="Повторите пароль"/>
                            </Form.Group>
                            <Form.Group controlId="fromBasicCheckBox" style={{marginTop: '4%', display: 'flex', justifyСontent: 'space-between'}}>
                                <Link to="/datainput"><Button variant="danger">Зарегистрироваться</Button></Link>
                                <Link to="/login"><Button variant="danger">Войти</Button></Link>
                            </Form.Group>
                        </Form> */}
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)