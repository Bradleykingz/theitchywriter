import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <div>
      <h2>
         Articles 
      </h2>
      <input type="text" placeholder="Search"></input>
    </div>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
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
`;
