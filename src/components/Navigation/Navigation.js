import React from 'react';
import { 
    NavigationContainer,
    NavigationButton
} from '../../styles';
import { Link } from 'gatsby';

const Navigation = props => {
    return (
        <NavigationContainer>
            <NavigationButton>
                <Link to = {'/'} >Home</Link>
            </NavigationButton>
            <NavigationButton>
                <Link to = {'/contact/'} >Contact</Link>
            </NavigationButton>
            <NavigationButton>
                <Link to = {'/Blog-posts/'} >Blog Posts</Link>
            </NavigationButton>
        </NavigationContainer>
    )
}

export default Navigation;