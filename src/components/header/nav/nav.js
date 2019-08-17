import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import Github from '../../../../content/images/icons/github-logo.png'
import Twitter from '../../../../content/images/icons/twitter.png'
import PrimaryButton from '../../button/primaryButton';


const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      
      {/* <li>
        <a href="https://twitter.com/user/bradleykingz">
          <img src={Twitter}></img>
        </a>
      </li>
      <li>
        <a href="https://github.com/user/bradleykingz">
          <img src={Github}></img>
        </a>
      </li> */}
      <li>
        <a href="http://there.com">
          <PrimaryButton style={{width: "80px"}}>Get in Touch</PrimaryButton>
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
