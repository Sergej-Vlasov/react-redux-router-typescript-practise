import React from 'react';
import NavItem from './NavItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link'

const navbar: React.FC = () => (
    <div>
    <AppBar position='static' color='default'>
        <Toolbar>
            <NavItem to='/' label='Home'/>
            <NavItem to='/news' label='News'/>
            <NavItem to='/login' label='Login'/>
            <NavItem to='/profile' label='Profile'/>
            <NavItem to='/404' label='404'/> 
        </Toolbar>
    </AppBar>
        
    </div>
);

export default navbar;