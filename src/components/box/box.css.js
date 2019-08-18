import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
`;

export const HomepageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;

    ${MEDIA.BIG_PHONE`
        grid-template-columns: unset;
        
        .title_parent {
            grid-row: 2;
        }
    `}
`;
 