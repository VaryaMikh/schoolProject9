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
                            Вам необходимо указать email адресс и пароль, нажать кнопку зарегистрироваться для регистрации в системе мониторинга состояния.
                        </Card.Text>
                        <FormReg />
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)