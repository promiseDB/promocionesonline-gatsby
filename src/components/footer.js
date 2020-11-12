import React from "react"
import {Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from './image';
import { css } from '@emotion/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";

const Footer = () => {

  return (  
     <footer
          css={css`
               margin-top: 4rem;
               padding: 3rem;
               width: 100%;
               height: auto;
               line-height: 6rem;
               background-color: #4D4D4D;
          `}
     
     >
       <Container>
          <Row
               css={css`
               margin-bottom: -20px;
          `}
          >
               <Col>
                    <div
                         css={css`
                              text-align: center;
                              margin-top: 4;
                         `}
                    >
                         <Image />
                    </div>
               </Col>
          </Row>
          <Row
               css={css`
                    justify-content: center;
               `}
          >
               <Link to="https://www.facebook.com/PromocionesOnlineArgentina" target="_blank"><FontAwesomeIcon icon={faFacebook} color="white" size="3x"
                    css={css`
                         margin-right: 1rem;
                    `}
               /></Link>
               <Link to="https://www.instagram.com/promocionesonline.arg/" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white" size="3x"/></Link>
          </Row>
          <Row
               css={css`
                   justify-content:center;

                   @media (min-width: 768px) {
                    justify-content:space-between;
                    }
              `}
          >
               <Col md={4}
                    css={css`
                    text-align:center;
                         
                    @media (min-width: 768px) {
                              justify-content: text-align:end;
                              text-align:start;
                         }
                    
                    `}
                    
               >Copyright © {new Date().getFullYear()}</Col>
               <Col md={4}
                    css={
                         css`
                         text-align:center;
                         padding: -10px;
                         @media (min-width: 768px) {
                                   text-align:end;
                              }
                    `}
               >Promociones Online Argentina</Col>
          </Row>
       </Container>
   </footer>
     );
}
 
export default Footer;