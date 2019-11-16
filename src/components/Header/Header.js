import React from 'react';
import { Header1 } from '../../styles';

const Header = props => {
    const { text } = props;
    return (
        <Header1>{ text }</Header1>
    )
}

export default Header;