import React from 'react';
import Box from 'components/box';
import SmallContentContainer from 'components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'
import PrimaryButton from '../components/button/primaryButton';

const NonStretchedImage = props => {
  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      }
    }
  }
  return <Img {...normalizedProps} />
}

const NotFound = ({ data }) => (
  <SmallContentContainer>
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>That's a 404.</h2>

      <NonStretchedImage fluid={data.file.childImageSharp.fluid} />
      <h2 style={{ margin: "1rem 0" }}>You must be lost.</h2>
      <p>Hmm... Seems like we couldn't find what you're looking for.</p>
      <a href="/">
        <PrimaryButton>Go back home</PrimaryButton>
      </a>
    </div>
  </SmallContentContainer>
);

export default NotFound;

export const query = graphql`
  query NotFoundQuery {
    file(relativePath: {eq: "images/gallery/looking_in_box.png"}){
      childImageSharp {
        fluid (quality: 90, maxWidth: 500){
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`