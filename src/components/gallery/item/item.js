import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { ItemContainer, Title, Tag, Copy } from './item.css';
import {Link} from 'gatsby'

const Item = ({ title, copy, image, tag, slug }) => (
  <ItemContainer>
    <Link to={slug} key={slug} style={{color: 'unset', textDecoration: 'none'}}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      {/* <img src={image}/> */}
      <Tag>{tag}</Tag>
      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </figcaption>
    </Link>
  </ItemContainer>
);
 
Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object,
  tag: PropTypes.string,
  slug: PropTypes.string
};

export default Item;
