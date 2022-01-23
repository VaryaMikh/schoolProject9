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

export default function NaviBar() {
    return (
    <>
        <Styles style={{display: 'flex', justifyContent: 'center', borderBottom: '1px solid'}}>
            <Navbar style={{width: '792px', height: '13vh'}}>
                <Container>
                <Navbar.Brand href="https://aura-soft.ru/">
                    <img
                        src="https://aura-soft.ru/wp-content/uploads/2021/03/cropped-87.png"
                        width="100%"
                        height="100%"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                    <Navbar.Brand style={{color: '#38127a', fontSize: '150%', textAlign: 'start'}}>ВПО №64, СПб ГБУЗ "Городская поликлиника №122"</Navbar.Brand>
                </Container>
            </Navbar>
        </Styles>
    </>
);}