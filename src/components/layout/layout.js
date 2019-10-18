import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from '../../components/head/head';
import Header from '../../components/header/header';
import GlobalStyle from '../../global.css.js';
import { SmallContentContainer } from './layout.css';

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    <SmallContentContainer>
      {children}
    </SmallContentContainer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;