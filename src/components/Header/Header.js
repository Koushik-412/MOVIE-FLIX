import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.css";
import Icon from '../icon/Icon';

function Header() {
    const email = localStorage.getItem("email");
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">MOVIE-PLEX</Navbar.Brand>
                <span className='d-flex'>
                    <div className="d-block d-lg-none"><Icon /></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </span>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-lg-flex flex-lg-row justify-content-lg-center align-items-center">
                        <Nav.Link as={Link} to="/movies/popular">Popular</Nav.Link>
                        <Nav.Link as={Link} to="/movies/top_rated">Top-rated</Nav.Link>
                        {/* <Nav.Link as={Link} to="/movies/upcoming">Upcoming</Nav.Link> */}
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                        <Nav.Link as={Link} to="/movies/upcoming">Your  Playlist</Nav.Link>
                        <span className="d-none d-lg-block"><Icon /></span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
