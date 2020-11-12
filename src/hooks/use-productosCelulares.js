import {graphql, useStaticQuery} from 'gatsby';

const useProductosCelulares = () => {

     const data = useStaticQuery(graphql`
     query{
          allDatoCmsProducto(filter: {categoria: {eq: "Celular"}}) {
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
     `);

    

     return data.allDatoCmsProducto.nodes.map(producto => ({
          titulo: producto.titulo,
          id: producto.id,
          descripcion: producto.descripcion,
          imagen: producto.imagen,
          slug: producto.slug,
          enlaceamazon: producto.enlaceamazon,
          update: producto.update,
          categoria: producto.categoria,
          precio: producto.precio
     }));
}
 
export default useProductosCelulares;