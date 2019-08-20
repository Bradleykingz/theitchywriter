import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-right: 3rem;
  margin-left: 10rem;

  ${MEDIA.BIG_PHONE_1`
      margin-left: 1rem;
      margin-right: 2rem;
  `}

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
