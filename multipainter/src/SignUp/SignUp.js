import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'; 
import { handleSignUp } from '../Auth/auth';
import { confirmSignUp } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';

function SignUp() {
    const navigate = useNavigate();
    const SIGN_IN_STATES = {
        START: "Start",
        CONFIRM: "Confirm",
        SIGNED_IN: "Signed In",
        ERROR: "Error"
    };
    const [state, setState] = useState(SIGN_IN_STATES.START);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [code, setCode] = useState(0);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {   
        async function currentAuthenticatedUser() {
            try {
              const userAttributes  = await fetchUserAttributes();
              setUserDetails(userAttributes);
            } catch (err) {
              console.log(err);
              return null;
            }
          } 
        currentAuthenticatedUser();
      }, []); 

    const handleSignIn = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return; // Prevent form submission if passwords don't match
        }

        // Validate password policy
        const passwordPolicy = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPolicy.test(password)) {
            alert("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        // Reset the passwords match state
        setPasswordsMatch(true);

        // sign in 
        handleSignUp({ username: username, password: password, email: email });
        // change the state to prompt a new form
        setState(SIGN_IN_STATES.CONFIRM);
    };

    const handleConfirmation = async (event) => {
        event.preventDefault();

        try {
            const { isSignUpComplete } = await confirmSignUp({
                username: email,
                confirmationCode: code
            });
            if (isSignUpComplete) {
                setState(SIGN_IN_STATES.SIGNED_IN);
            }
        } catch (error) {
            console.log('error confirming sign up', error);
            alert("Incorrect Confirmation Code");
        }
    };

    return (
        <>
            <Helmet>
                <title>MultiPixel | SignUp </title>
            </Helmet>
            <div className="container">
                {state === SIGN_IN_STATES.START && (
                    <form onSubmit={handleSignIn}>
                        <div className='note-text'> Note: Please do not use a password or username you use elsewhere </div>
                        <div className='username-block'>
                            <div className='username-text'>
                                Your Username
                            </div>
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required /><br />
                        </div>

                        <div className='username-block'>
                            <div className='username-text'>
                                Your Email
                            </div>
                            <input type="text" name="username" onChange={(e) => setEmail(e.target.value)} required /><br />
                        </div>

                        <div className='password-block'>
                            <div className='password-text'>
                                Choose a Password (Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.)
                            </div>
                        </div>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />

                        <div className='password-block'>
                            <div className='password-text'>
                                Confirm Password
                            </div>
                        </div>
                        <input type="password" name="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /><br />

                        {!passwordsMatch && <div className='note-text'>Passwords do not match</div>}

                        <input type="submit" value="Sign Up" />
                        <div className='sign-up-page'></div>
                    </form>
                )}

                {state === SIGN_IN_STATES.CONFIRM && (
                    <form onSubmit={handleConfirmation}>
                        <div className='note-text'> Check your email for confirmation </div>
                        <div className='username-block'>
                            <div className='username-text'>
                                Enter Confirmation Code
                            </div>
                            <input type="number" name="confirmationCode" onChange={(e) => setCode(e.target.value)} required /><br />
                        </div>
                        <input type="submit" value="Confirm Code" />
                    </form>
                )}

                {state === SIGN_IN_STATES.SIGNED_IN && (
                    <div >
                        <button onClick={() => { navigate('/Home') }}>Click To Go To the main Menu</button>
                        <button onClick={() => { navigate('/Profile') }}>Click To Go To Your Profile</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default SignUp;
