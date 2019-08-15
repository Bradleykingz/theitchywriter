import React from 'react'
import './primaryButton.css'

const PrimaryButton = ({children})=> {

    return (
        <button>
            {children}
        </button>
    )
}

export default PrimaryButton;