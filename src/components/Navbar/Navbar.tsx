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
            <NavItem to='/profile' label='Profile'/>
            <NavItem to='/login' label='Login'/>
        </Toolbar>
    </AppBar>
        
    </div>
);

export default navbar;