import React from 'react'
import {SecondaryButtonCss} from './button.css'


export const SecondaryButton = ({children})=> {

    return (
        <SecondaryButtonCss>
            {children}
        </SecondaryButtonCss>
    )
}