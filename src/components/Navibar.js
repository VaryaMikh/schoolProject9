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

    const [login, setShowLogin] = useState(false);
    const [reg, setShowReg] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleCloseReg = () => setShowReg(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleShowReg = () => setShowReg(true);
    return (
    <>
        {/* мой хедер */}
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Aura</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="success" onClick={handleShowLogin} className="mr-2" style={{marginRight: '3%'}}>Вход</Button>
                            <Button variant="primary" onClick={handleShowReg} className="mr-2">Регистрация</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
        {/* хедер с маминой работы */}
        {/* <header id="header" class="header" role="banner">
	        <div class="header-inner container">
		        <div class="branding">
			        <Link href="https://aura-soft.ru/" class="custom-logo-link" rel="home" aria-current="page"><img width="72" height="62" src="./АУРА — Медицинская информационная система_files/cropped-87.png" class="custom-logo" alt="АУРА" /></Link>			
                    <div class="site-name">
				        <div class="site-title">
	                        <Link href="https://aura-soft.ru/">АУРА</Link>
                        </div>	
                        <div class="site-description">Медицинская информационная система</div>
			        </div>
		        </div>		
                <Nav id="nav" class="nav" aria-label="Primary Navigation" role="navigation">
	                <ul id="primary-menu" class="menu" aria-expanded="false">
                        <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-14 current_page_item menu-item-23"><Link href="https://aura-soft.ru/" aria-current="page">О проекте</Link></li>
                        <li id="menu-item-25" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"><Link href="https://aura-soft.ru/?page_id=15">Контакты</Link></li>
                        <li id="menu-item-64" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"><Link href="https://aura-soft.ru/?page_id=52">Для клиентов</Link></li>
                    </ul>
                </Nav>		
                <Button id="menu-toggle" class="menu-toggle header-icon" aria-controls="primary-menu" aria-expanded="false">
	                <span class="screen-reader-text">Menu</span>
	                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </Button>	
            </div>
        </header> */}

        <Modal show={login} onHide={handleCloseLogin}>
            <Modal.Header closeButton>
                <Modal.Title>Вход</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Control type="email" placeholder="Email"/>
                        <Form.Text className="text-muted">We'll never share your email with</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassward" style={{marginTop: '2%'}}>
                        <Form.Control type="passward" placeholder="Пароль"/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckBox" style={{marginTop: '4%', display: 'flex', justifyСontent: 'space-between'}}>
                        <Nav.Link><Link to="/dataInput"><Button variant="danger">Войти</Button></Link></Nav.Link>
                        <Button variant="link"><Link to="/password">Забыли пароль?</Link></Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
        <Modal show={reg} onHide={handleCloseReg}>
            <Modal.Header closeButton>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Control type="email" placeholder="Email"/>
                        <Form.Text className="text-muted">We'll never share your email with</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassward" style={{marginTop: '2%'}}>
                        <Form.Control type="passward" placeholder="Пароль"/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassward" style={{marginTop: '2%'}}>
                        <Form.Control type="passward" placeholder="Повторите пароль"/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckBox" style={{marginTop: '4%'}}>
                        <Button variant="danger">Зарегистрироваться</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </>
);}