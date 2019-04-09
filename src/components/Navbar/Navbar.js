import React from 'react';
import NavItem from './NavItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import * as actionTypes from '../../store/actions'


const navbar = (props) => (
    <div>
        <AppBar position='static' color='default'>
            <Toolbar>
                <NavItem to='/' label='Home'/>
                <NavItem to='/news' label='News'/> 
                <NavItem to='/profile' label='Profile'/>
                {props.isAuth ? 
                    <Button onClick={props.onLogOut} variant='outlined' color='primary'><span>Logout</span></Button> 
                    : <NavItem to='/login' label='Login'/>}
            </Toolbar>
        </AppBar> 
    </div>
);

const mapStateToProps = state => {
    return {
        isAuth: state.authenticated,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch({type: actionTypes.LOG_OUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);