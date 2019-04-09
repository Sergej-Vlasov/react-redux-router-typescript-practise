import React, {useState} from 'react';
import { connect } from 'react-redux';
import { credentialChecker } from '../store/actions';
import { Redirect } from 'react-router-dom';

const login = (props) => {
    const [username, setUsername] = useState({username: ''});
    const [password, setPassword] = useState({password: ''});

    const submitCredentialsHandler = () => {
        props.onAuthenticationAttempt(username.username, password.password)
        // setUsername({username: ''});
        // setPassword({password: ''})

    }

    const enterKeyHandler = (e) => {
        if (e.keyCode === 13) {
            submitCredentialsHandler();
        }
    }

    let authRedirect = null;
    if (props.isAuth) {
        authRedirect = <Redirect to='/profile'/>
    }

    return (
        <div className='container' onKeyDown={enterKeyHandler}>
            {authRedirect}
            <input type='text' placeholder='username' value={username.username} onChange={e => setUsername({username: e.target.value})}/>
            <input type='password' placeholder='password' value={password.password} onChange={e => setPassword({password: e.target.value})}/>
            <button onClick={submitCredentialsHandler} >Signin</button>
            {props.isAuth ? <p>Logged in!</p>: null}
            {props.isError ? <p>incorrect credentials</p>: null}
        </div>
    )

};

const mapStateToProps = state => {
    return {
        isAuth: state.authenticated,
        isError: state.loginError
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuthenticationAttempt: (usrn, pwd) => dispatch(credentialChecker(usrn, pwd))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(login);