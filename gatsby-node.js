const {paginate} = require('gatsby-awesome-pagination');
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
     const { createPage } = actions;
   
     // Fetch your items (blog posts, categories, etc).
     const notebooks = await graphql(`
     query{
          allDatoCmsProducto (filter: {categoria: {eq: "Notebook"}}) {
            nodes {
               titulo
               id
              }
            }
          }
     `)
   
     // Create your paginated pages
     paginate({
       createPage,
       items: notebooks.data.allDatoCmsProducto.nodes,
       itemsPerPage: 3,
       pathPrefix: '/notebooks',
       component: path.resolve(`./src/components/notebooks.js`), 
     });

     //Pagina de celulares
     const celulares = await graphql(`
     query{
          allDatoCmsProducto (filter: {categoria: {eq: "Celular"}}) {
            nodes {
               titulo
               id
              }
            }
          }
     `)

      // Create your paginated pages
      paginate({
        createPage,
        items: celulares.data.allDatoCmsProducto.nodes,
        itemsPerPage: 3,
        pathPrefix: '/celulares',
        component: path.resolve(`./src/components/celulares.js`), 
      });

           //Pagina de Hogar
     const hogar = await graphql(`
     query{
          allDatoCmsProducto (filter: {categoria: {eq: "Hogar"}}) {
            nodes {
               titulo
               id
              }
            }
          }
     `)

      // Create your paginated pages
      paginate({
        createPage,
        items: hogar.data.allDatoCmsProducto.nodes,
        itemsPerPage: 3,
        pathPrefix: '/hogar',
        component: path.resolve(`./src/components/hogar.js`), 
      });
   }