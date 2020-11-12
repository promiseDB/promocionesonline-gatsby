import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
     return ( 
          <>   
               <Helmet>
                    <title>Promociones Online Argentina</title>
               </Helmet>
               <Header />
               {props.children} 
               <Footer />
          </>
          );
}
 
export default Layout;