import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import Logo from '../../../content/images/gallery/writing1.png'

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/" style={{ display: "flex", alignItems: "center", marginTop: "28px"}}>
        <img src={Logo} style={{ maxWidth: "50px", maxHeight: "50px", marginRight: "1rem" }} alt={"a hand writing"} />
        {/* <Title as="h1" style={{ textTransform: "uppercase" }}>
          {title}
        </Title> */}
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
