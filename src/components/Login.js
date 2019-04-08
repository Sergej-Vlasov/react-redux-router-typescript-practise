import React, {useState} from 'react';
import { connect } from 'react-redux';
import { credentialChecker } from '../store/actions';

const login = (props) => {
    const [username, setUsername] = useState({username: ''});
    const [password, setPassword] = useState({password: ''});

    const submitCredentialsHandler = () => {
        props.onAuthenticationAttempt(username.username, password.password)
        // setUsername({username: ''});
        // setPassword({password: ''})

    }

    return (
        <div className='container'>
            <input type='text' placeholder='username' value={username.username} onChange={e => setUsername({username: e.target.value})}/>
            <input type='password' placeholder='password' value={password.password} onChange={e => setPassword({password: e.target.value})}/>
            <button onClick={submitCredentialsHandler}>Submit</button>
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