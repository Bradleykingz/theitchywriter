import styled from 'styled-components';
import MEDIA from '../../../helpers/mediaTemplates'

export const Container = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }

  img {
    width: 24px;
  }

  .nav_menu {
    ${MEDIA.PHONE`
      li {
        font-size: 1.05rem;
      }
    `}
  }
`;
