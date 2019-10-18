import styled from 'styled-components';

export const ContentBoxCss = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) ) ;
    grid-gap: 2rem;

    &>div {
        
        h3 {
            margin: 1rem 0;
            color: #6E7788;
        }
    }

    h2 {
        color: #004196;
    }

    
`
