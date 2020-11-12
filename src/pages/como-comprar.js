import React from "react"
import { Container, ResponsiveEmbed } from 'react-bootstrap';
import Layout from '../components/layout';  
import { css } from '@emotion/core';

const IndexPage = () => {  
  return (
    <Layout>
          <Container
               css={css`
                    background-color: #F5F5F5;
                    padding: 3rem;
                    border-radius: 2rem;
               `}
          >
          <h1>Requisitos para comprar en Amazon desde Argentina</h1>
          <p>1. Sólo podrán ser utilizados 5 veces por año calendario por persona.</p>
          <p>2. No deben tener finalidad comercial.</p>
          <p>3. El valor del envío no podrá superar los u$s3.000 y los 50 kg. Conformado por hasta 3 unidades de la misma especie.</p>
          <p>4. El consignatario debe tener dado de alta el Domicilio Fiscal Electrónico donde será notificado de la confirmación de envío por parte del Coureir. También podrá ingresar con clave fiscal al servicio “Envíos Postales Internacionales” para consultar el detalle del envío, el prestador de servicios postales actuante y la afectación del cupo.</p>
          <p>5. El courier debe confirmar la entrega del envío.</p>

          <h2
               css={css`
               text-align: center;
               margin-top: 2rem;
          `}

          >Paso a paso</h2>
          <div
               css={css`
                    text-align: center;
                    margin-top: 3rem;
               `}
               >
               <ResponsiveEmbed aspectRatio="16by9">
                    <iframe src="https://www.youtube.com/embed/uBV0BktOpb8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </ResponsiveEmbed>
          </div>

          </Container>
    </Layout>
  );
}


export default IndexPage