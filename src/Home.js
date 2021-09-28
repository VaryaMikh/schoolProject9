import React from 'react';

import { Button, Container, Card } from 'react-bootstrap';
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

export const Home = () => (
    <>
        <Styles style={{backgroundColor: '#dafcff'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Card>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center', fontSize: '50px'}}>Здравствуйте</Card.Title>
                        <Card.Text>
                            Мы рады приветствовать вас в нашей клинике. Аутентифицируйтесь для продолжения работы на сайте.
                        </Card.Text>
                        <Link to="/login"><Button variant="primary">Продолжить</Button></Link>
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)