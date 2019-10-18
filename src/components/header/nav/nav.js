import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import Github from '../../../../content/images/icons/github-logo.png'
import Twitter from '../../../../content/images/icons/twitter.png'
import PrimaryButton from '../../button/primaryButton';
import { SecondaryButton } from '../../button/button';


const Nav = () => (
  <Container>
    <ul className={`nav_menu`}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work/">Work</Link>
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
        <a href='https://ko-fi.com/R5R014YIM' target='_blank'>
          <img style={{height: "36px", width: "140px"}}
               src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2'
               border='0' alt='Buy Me a Coffee at ko-fi.com'/>
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
