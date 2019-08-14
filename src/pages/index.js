import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import Footer from '../components/footer/footer';

const Index = ({ data }) => (
  <div>
    <Layout>
      <Box>
        <Title as="h2" size="large">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Title>
        {/* <Modal>
          <video
            src="https://i.imgur.com/gzFqNSW.mp4"
            playsInline
            loop
            autoPlay
            muted
          />
        </Modal> */}
      </Box>
      <Gallery />
    </Layout>
    
    <div style={{ height: '50vh' }} />
    <Footer></Footer>
    {/* <IOExample /> */}
  </div>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        tag
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
