import React from "react"
import { Container, Row  } from 'react-bootstrap';
import Layout from '../components/layout';
import useAllProductos from '../hooks/use-allproductos';
import ProductoPreview from "../components/productoPreview";

const IndexPage = () => {
  const productos = useAllProductos();

  
  return (
    <Layout>
        <Container>
          <Row>
            {productos.map(producto => (
                <ProductoPreview 
                  key={producto.id}
                  producto={producto}
                />
            ))}
          </Row>
      </Container>
    </Layout>
  )
}


export default IndexPage
