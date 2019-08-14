import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = () => {
  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt
              frontmatter {
                additionalTags
                copy
                date
                featuredImage {
                  publicURL
                  childImageSharp {
                    fluid(maxHeight: 500, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                  }
                }
                title
                mainTag
              }
            }
          }
        }
    }
  `)
  return (
    <Container>
      {
        data.allMarkdownRemark.edges.map(({node, i})=> {
          console.log(node.frontmatter.featuredImage);
          return <Item 
            slug={node.fields.slug} 
            tag={node.frontmatter.mainTag}
            title= {node.frontmatter.title}
            key={node.id}
            copy={node.frontmatter.copy}
            image={node.frontmatter.featuredImage}
            tag={node.frontmatter.mainTag}
            /> 
        })
      }
      {/* {
        items.map((item, i) => (
        <Item slug={} tag={item.tag} {...item} key={i} /> 
      ))} */}
    </Container>
  )
};


export default Gallery;
