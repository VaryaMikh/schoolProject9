import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Form, Modal } from 'react-bootstrap';
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

export default function Footer() {
    return (
    <>
        <Styles style={{display: 'flex', justifyContent: 'center', borderTop: '1px solid'}}>
            <Navbar style={{height: '7vh'}}>
                <Container>
                    <Navbar.Brand style={{color: '#515151', textAlign: 'start', fontSize: '14px'}}>Copyright © 2021 OOO "АУРА-СОФТ"</Navbar.Brand>
                </Container>
            </Navbar>
        </Styles>
    </>
);}