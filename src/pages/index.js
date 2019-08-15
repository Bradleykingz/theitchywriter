import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { ShadowBox, SubTitle } from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import Footer from '../components/footer/footer';
import 'global.css.js'
import Img from 'gatsby-image'
import PrimaryButton from '../components/button/primaryButton';

const Index = ({ data }) => {

  return <div>
    <Layout>
      <Box>
        <div>
          <div>
            <Title as="h2" size="large">
              {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
            </Title>
          </div>
          <SubTitle>
            {"I am systems engineer, web-developer and robotics expert. Have a look around and don't be afraid to keep in touch."}
          </SubTitle>
          <div>
            <PrimaryButton>
              {
                "Contact Me"
              }
            </PrimaryButton>
          </div>
        </div>

        <Img fluid={data.file.childImageSharp.fluid} />

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
};

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
    file(relativePath: { eq: "images/gallery/flame-welcome.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        publicURL
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
