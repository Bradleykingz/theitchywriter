import styled from 'styled-components'
import MEDIA from '../../helpers/mediaTemplates'

export const SecondaryButtonCss = styled.button`
    border: none;
    border-radius: 4px;
    color: white;
    padding: 1.5rem 2.5rem;
    font-size: 1rem;
    transition: all 0.5s ease-in-out;
    background: #31768a;

    ${MEDIA.BIG_PHONE`
        padding: 1.35rem 0.95rem;
    `}

    &:hover {
        cursor: pointer;
    }
`

export const FluidPrimaryButtonCss = styled.button`
    border: none;
    border-radius: 4px;
    color: white;
    padding: 1.5rem 2.5rem;
    font-size: 1.3rem;
    transition: all 0.5s ease-in-out;
    background: #008CFF;
    width: 100%;

    ${MEDIA.PHONE`
        padding: 1.5rem 1.5rem;
    `}

    &:hover {
        cursor: pointer;
    }
`