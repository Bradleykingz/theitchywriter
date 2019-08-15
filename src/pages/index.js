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
      <div style={{ marginBottom: "200px", padding: "3rem 0" }}>
        <h2 style={{ color: "#004196", margin: "2rem 0" }}>Our Services</h2>
        <ContentBox>
          <div>
            <h3>Mergers</h3>
            <p>
              Lorem markdownum aequalis strigis. Saetigeri iubeas, vultu huic alvum nondum de obside ut laniavit arbor palmis, cum quin. Rupes vetat…
            </p>
          </div>

          <div>
            <h3>Business Sales</h3>
            <p>
              Lorem markdownum, dictis umbrosum dextrum, Lelegeia quamquam distantes pares ignisque quaerit dederat gemino Aethiopesque caelo ulciscitur…
            </p>
          </div>
          <div>
            <h3>Consultation</h3>
            <p>
              Cyanee nec pedicis positi. Esse et diem forte quoque et ieiunia vixque dixit negari ullis stamina : trahit. Tanta rictus in mitia causa…
            </p>
          </div>
          <div>
            <h3>Accounting</h3>
            <p>
              Lorem markdownum Achaica revolutaque amore , penitus puppes nec furit, clipeus fatetur, mira inter accedere. Dedit dum raptoresque Oete…
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
          <div>
            <h3>Tax Returns</h3>
            <p>
              Culpa voluptate quis occaecat culpa mollit cupidatat labore minim ipsum. Magna quis anim cillum esse.
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
