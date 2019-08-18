import React from 'react'
import PrimaryButtonCss from './primaryButton.module.css'
import { FluidPrimaryButtonCss } from './button.css';

const PrimaryButton = ({ children }) => {

    return (
        <button className={PrimaryButtonCss.button}>
            {children}
        </button>
    )
}

export default PrimaryButton;

export const FluidPrimaryButton = ({ children }) => {

    return (
        <FluidPrimaryButtonCss>
            {children}
        </FluidPrimaryButtonCss>
    )
}
