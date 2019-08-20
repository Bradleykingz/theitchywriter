import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Contact = ({ data }) => (
    <Layout>
        <Head pageTitle={data.aboutJson.title} />
        <div>
            <h2>
                Get in Touch
            </h2>
            <div>
                <form>
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>
        </div>
    </Layout>
);

Contact.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
