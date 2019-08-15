import React from 'react';
import PropTypes from 'prop-types';
import { Text, ShadowBoxCss } from './title.css';

const Title = ({ children, as = 'span', size }) => {
  return (
    <Text as={as} size={size}>
      {children}
    </Text>
  ); 
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Title;

export const SubTitle = ({ children }) => (
  <div>
      <p>{children}</p>
  </div>
)

export const ShadowBox = ({children})=> {
  return (
    <ShadowBoxCss>
      {children}
    </ShadowBoxCss>
  )
}
