import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css } from '@emotion/core';


const NavLink = styled(Link)`
     color: #9B9A9A;
     font-size: 1.2rem;
     font-weight: 500;
     line-height: 1rem;
     font-family: 'Goldman', cursive;
     text-decoration: none;
     padding: 10px;
     margin-right: 1rem;

     &:last-of-type {
          margin-right: 0;
     }
     &.pagina-actual {
          border-bottom: 2px solid #777777;
     }
`;

const Navegacion = () => {
     return ( 
          <Container>    
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
                    css={css`
                         margin-bottom: 2rem;
                    `}
               >
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="m-auto">
                    <Nav.Link><NavLink to="/">Recientes</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/notebooks">Notebooks</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/celulares">Celulares</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/hogar">Hogar</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/como-comprar">Como comprar</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/sobrenosotros">Sobre Nosotros</NavLink></Nav.Link>
               </Nav>
               </Navbar.Collapse>
               </Navbar>
          </Container> 
     );
}
 
export default Navegacion;