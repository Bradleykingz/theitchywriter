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
import ContentBox from '../components/content/content';
import NodeJsLogo from '../../content/images/icons/nodejs-480.png'
import VueJsLogo from '../../content/images/icons/vuejs-logo.png'
import PythonLogo from '../../content/images/icons/python-480.png'
import RustLogo from '../../content/images/icons/rust-logo-128.png'
import GoLogo from '../../content/images/icons/Go-Logo_Blue.png'

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
            {
              `
              I'm a full-stack developer - I write backend systems in NodeJS, Python and Java; and 
              specialize in frontend Javascript frameworks like VueJS, React and Svelte.
            `}
          </SubTitle>
          <div style={{ marginTop: "2rem" }}>
            <PrimaryButton>
              Get in Touch
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

      <div style={{ marginBottom: "200px", padding: "3rem 0" }}>
        <h2 style={{ color: "#004196", margin: "2rem 0" }}>Our Services</h2>
        <ContentBox>
          <div>
            <h3>Web Development</h3>
            <p>
              We build modern websites using state-of-the art Javascript frameworks - VueJS & React (this website is build using ReactJS).
            </p>
          </div>
          <div>
            <h3>Big Data</h3>
            <p>
              We use Big Data frameworks like Hadoop and Spark to build data pipelines for businesses. 
              This includes custom machine learning training models and natural language processing. 
            </p>
          </div>

          <div>
            <h3>Tech Stack Consultation</h3>
            <p>
              Need a quote for the price of a simple static website or how long a logo design is going to take?
            </p>
          </div>
          <div>
            <h3>Writing</h3>
            <p>
              I spend my free time writing blog posts on technology-oriented websites like Dataversity, Forbes, Alligatorio and Eggheadio.
            </p>
          </div>
          <div>
            <h3>Tax Preparation</h3>
            <p>
              Officia mollit mollit eiusmod veniam Lorem aliqua commodo sit fugiat eiusmod. Ut irure reprehenderit id deserunt ad consequat veniam mollit. Reprehenderit ea deserunt enim sint ad duis nisi mollit pariatur velit sunt laborum labore.
            </p>
          </div>
          <div>
            <h3>Auditing</h3>
            <p>
              Proident irure nulla aute reprehenderit nostrud nisi sint incididunt occaecat exercitation id do dolore do. Enim in deserunt culpa non reprehenderit fugiat proident in id non est consequat commodo laboris.
            </p>
          </div>
          <div>
            <h3>Superannuation</h3>
            <p>
              Sint ad cupidatat proident Lorem nulla consectetur nisi reprehenderit ea elit id voluptate sit exercitation. Nisi est elit esse in ullamco aliqua commodo velit consectetur laborum voluptate dolore.
            </p>
          </div>

        </ContentBox>
        <div style={{ textAlign: "center" }}>
          <PrimaryButton>
            VIEW ALL SERVICES
          </PrimaryButton>
        </div>
      </div>
      <div>
        <h2 style={{ color: "#004196", margin: "2rem 0" }}>Latest Blog Posts</h2>
        <Gallery />
      </div>
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
          fluid (quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
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
