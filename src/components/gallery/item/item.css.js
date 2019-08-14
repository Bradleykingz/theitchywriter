import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ItemContainer = styled.div`
  display: grid;
  border: solid 1px grey;
  box-sizing: border-box;
  // padding-top: 15px;
  padding-bottom: 15px;
  // padding-left: 10px;
  // padding-right: 10px;
  // background-size: cover;
  min-height: 220px;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px;
  background-blend-mode: multiply;
  position: relative;
  background-position: center top;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(217, 217, 217);
  border-image: initial;
  transition: box-shadow 0.3s ease 0s, border-color 0.3s ease 0s,
    background-color 0.3s ease 0s, filter 0.3s ease 0s;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Tag = styled.h4`
  margin: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #c44f6f;
  font-size: 1.25rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
