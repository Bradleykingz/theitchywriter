import React from 'react';
import {ContentBoxCss} from './content.css';

const ContentBox = ({children})=> {

    return (
        <ContentBoxCss>
            {children}
        </ContentBoxCss>
    )
}

export default ContentBox;