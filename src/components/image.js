import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from '@emotion/styled';

const ImagenTam = styled(Img)`
      width: 250px;
      display:block;
      margin:auto;
      margin-bottom: 2rem
 `;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
        <ImagenTam fluid={data.placeholderImage.childImageSharp.fluid} />
  ) 
}

export default Image
