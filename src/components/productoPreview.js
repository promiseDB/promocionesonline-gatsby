import React from 'react';
import {CardDeck, Card, Col, Button  } from 'react-bootstrap';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';



const Boton = styled.div`
     text-align: center;
`

const Separacion = styled.div`
     margin-bottom: 1rem;
`

const ProductoPreview = ({producto}) => {

     const { imagen, titulo, enlaceamazon, precio} = producto;
     return ( 
          <Col xs={12} sm={6} md={4}>
               <Separacion>
                    <CardDeck>     
                         <Card>
                         <Link to={enlaceamazon} target="_blank"><Image fluid={imagen.fluid} /></Link>
                         <Card.Body>
                              <Card.Title
                                   css={css`
                                   font-family: 'Montserrat', sans-serif;
                                   margin-top: 0;
                                   `}
                              >{titulo}</Card.Title>
                              <p
                                   css={css`
                                        font-size: 1.4rem;
                                        font-family: 'Prompt', sans-serif;
                                        margin-top: 2rem;
                                        margin-bottom: 0.5rem;
                                   `}
                              >ARS <strong> {precio}</strong> | EUR <strong>{parseInt(precio/150)}</strong></p>
                              <p
                                   css={css`
                                   font-size: 10px;
                                   font-family: 'Prompt', sans-serif;
                                   margin-bottom: 0;
                              `}
                              
                              >*El precio en pesos, incluye impuesto PAIS + Retencion a las Ganancias (30% + 35%)</p>
                         </Card.Body>
                         <Card.Footer>
                              <Boton>
                                   <Link to={enlaceamazon} target="_blank"><Button variant="warning" block>Comprar en Amazon</Button></Link>
                              </Boton>
                         </Card.Footer>
                         </Card>
                    </CardDeck>
               </Separacion>
          </Col>
     );
}
 
export default ProductoPreview;