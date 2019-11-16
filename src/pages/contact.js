import React from "react";
import { 
    Header, 
    Navigation 
} from '../components';
import { 
    PageContainer,
    DefaultSpan,
    DefaultDiv
} from '../styles';

const Contact = props => {
    return (
        <PageContainer>
            <DefaultDiv>
                <Navigation />
                <Header text = { 'Header 1' }  />
                <DefaultSpan>Contact!</DefaultSpan>
            </DefaultDiv>
        </PageContainer>
    )
}

export default Contact;