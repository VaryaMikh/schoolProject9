import { React } from 'react';

import { Button, Card, Container, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormData from './FormData';
import { createGlobalState } from 'react-hooks-global-state';


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
        <Styles style={{color: '#515151'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', borderBottom: 'solid'}}>
                <Card>
                    <Card.Body>
                        <Card.Title>Страница ввода медицинских данных</Card.Title>
                        <Card.Text>
                            Введите данные о вашем самочувствии в следующих полях:
                        </Card.Text>
                        
                        <FormData />
                    </Card.Body>
                </Card>
            </Container>
        </Styles>
    </>
)            