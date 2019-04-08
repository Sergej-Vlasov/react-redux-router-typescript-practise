import React from 'react';
import NavItem from './NavItem';

const navbar: React.FC = () => (
    <div>
        <NavItem to='/' label='Home'/>
        <NavItem to='/news' label='News'/>
        <NavItem to='/login' label='Login'/>
        <NavItem to='/profile' label='Profile'/>
        <NavItem to='/404' label='404'/>
    </div>
);

export default navbar;