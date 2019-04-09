import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const profile = (props) => {

    let authCheck = null;
    if (!props.isAuth) {
        authCheck = <Redirect to='/login'/>
    }

    return (
        <div>
            {authCheck}
            <div>Profile</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.authenticated,
    }
};


export default connect(mapStateToProps)(profile);