import React from "react"
import { Container } from 'react-bootstrap';
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
          <h1>Sobre Nosotros</h1>
          <p>Nos encargamos de buscar promociones y ofertas en Amazon con envío a Argentina. Nosotros no vendemos ningún producto, solo nos encargamos de informarte las promociones y ofertas vigentes, toda la compra se realiza directamente en Amazon.</p>
          <p>En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</p>
          <p>Promociones Online Argentina participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.co.uk/Amazon.de/Amazon.fr/Amazon.it/Amazon.es. Amazon y el logotipo de Amazon son marcas comerciales de Amazon.com, Inc. o de sociedades de su grupo.</p>
          </Container>
    </Layout>
  )
}


export default IndexPage
