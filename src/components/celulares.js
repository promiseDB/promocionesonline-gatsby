import React from 'react';
import {graphql} from 'gatsby'
import Layout from './layout';
import ProductoPreview from "./productoPreview";
import { Container, Row  } from 'react-bootstrap';
import Pager from './pager';


export const pageQuery = graphql`
query ($skip: Int!, $limit: Int!) {
  allDatoCmsProducto(
     filter: {categoria: {eq: "Celular"}}
    skip: $skip
    limit: $limit
  ) {
    nodes {
      titulo
      id
      slug
      descripcion
      precio
      enlaceamazon
      categoria
      updated
      imagen {
           fluid(maxWidth:200){
                ...GatsbyDatoCmsFluid
           }
     }
   }
  }
}
`

const celularesTemplate = ({ data, pageContext }) => {

return(     
     <Layout>
          <Container>
               <Row>
                    {data.allDatoCmsProducto.nodes.map(producto => (
                         <ProductoPreview 
                              key={producto.id}
                              producto={producto}
                         />
                    ))}
               </Row>
               <Pager 
                    pageContext={pageContext} 
               />
          </Container>
     </Layout>
 )}


 export default celularesTemplate;