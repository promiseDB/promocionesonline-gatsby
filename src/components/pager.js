import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/core';


const Pager = ({ pageContext }) => {

     const { previousPagePath, nextPagePath} = pageContext;

     
     return (
          <div
               css={css`
                    margin-top: 4rem;
                    text-align:center;
               `}
          >

               {previousPagePath && (
                    <span><Link to={previousPagePath}><FontAwesomeIcon icon={faChevronLeft} color="black" size="3x"/></Link></span>
               )}
               {nextPagePath && (
                    <span><Link to={nextPagePath}><FontAwesomeIcon icon={faChevronRight} color="black" size="3x"/></Link></span>
               )}
          </div>
       );
}
 
Pager.propTypes = {
     pageContext: PropTypes.object.isRequired,
};


export default Pager;