import React from 'react'
import {Foot} from './footer.css.js'
import Twitter from '../../../content/images/icons/twitter.png';
import Github from '../../../content/images/icons/github-logo.png';

const Footer = ({data}) => {

  return <div>
    <Foot>
      <li>
        <a href={"https://twitter.com/bradleykingz"}>
          <img src={Twitter} alt={"Twitter logo"}/>
        </a>
      </li>
      <li>
        <a href={"https://github.com/bradleykingz"}>
          <img src={Github} alt={"Twitter logo"}/>
        </a>
      </li>
      <li>
        <a href='https://ko-fi.com/R5R014YIM' target='_blank'>
          <img src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=2'
               border='0' alt='Buy Me a Coffee at ko-fi.com'/>
        </a>
      </li>
    </Foot>
  </div>
}

export default Footer;
