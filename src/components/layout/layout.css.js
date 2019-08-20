import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates'

export const SmallContentContainer = styled.div`
    padding: 2rem 10rem;
    
    ${MEDIA.BIG_PHONE_1`
        padding: 2rem;
    `
    }
`