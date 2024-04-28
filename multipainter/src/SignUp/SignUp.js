import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'; 
import {handleSignUp} from '../Auth/auth';
import { confirmSignUp, signOut } from 'aws-amplify/auth';

import {fetchUserAttributes } from 'aws-amplify/auth';

function SignUp() {
    const navigate = useNavigate();
    // state of the board
    const SIGN_IN_STATES = {
        START: "Start",
        CONFIRM: "Confirm",
        SIGNED_IN: "Signed In",
        ERROR: "Error"
    }
    const [state, setState] = useState(SIGN_IN_STATES.START);
    // form values
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [code, setCode] = useState(0);

    const handleSignIn = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return; // Prevent form submission if passwords don't match
        }

        // Reset the passwords match state
        setPasswordsMatch(true);

        // sign in 
        handleSignUp({username: username, password: password, email: email});
        // change the state to prompt a new form
        setState(SIGN_IN_STATES.CONFIRM);
    };

    async function handleSignUpConfirmation({ username, confirmationCode }) {
        try {
          const { isSignUpComplete, nextStep } = await confirmSignUp({
            username,
            confirmationCode
          });
          return isSignUpComplete;
        } catch (error) {
          console.log('error confirming sign up', error);
          return null
        }
      }

    const handleConfirmation = (event) => {
        event.preventDefault();

        // confirm code
        try {
            handleSignUpConfirmation({username: email, confirmationCode: code});
            setState(SIGN_IN_STATES.SIGNED_IN);
            console.log(isSignUpComplete)
        } catch (error) {
            console.log('error confirming sign up', error);
            alert("Incorrect Confirmation Code");
            
          }
        const isSignUpComplete = handleSignUpConfirmation({username: email, confirmationCode: code});

        // change the state to prompt a new form
        setState(SIGN_IN_STATES.SIGNED_IN);
        console.log(isSignUpComplete)
    };


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
    console.log(userDetails);


    return (
        <>
            <Helmet>
                <title>MultiPixel | SignUp </title>
            </Helmet>
            <div className="container">

                {// code to display the form only if at start of sign in
                state === SIGN_IN_STATES.START && (
                <form onSubmit={handleSignIn} >
                    <div className='note-text'> Note: Please do not use a password or username you use elsewhere </div>
                    <div className='username-block'>
                        <div className='username-text'>
                            Your Username = {/*userDetails.preferred_username*/}
                        </div>
                        <input  type="text" name="username" onChange={(e) => setUsername(e.target.value)} required/><br/>
                    </div>

                    <div className='username-block'>
                        <div className='username-text'>
                            Your Email = {/*userDetails.email*/}
                        </div>
                        <input  type="text" name="username" onChange={(e) => setEmail(e.target.value)} required/><br/>
                    </div>

                    <div className='password-block'>
                        <div className='password-text'>
                            Choose a Password
                        </div>
                    </div>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>

                    <div className='password-block'>
                        <div className='password-text'>
                            Confirm Password
                        </div>
                    </div>
                    <input type="password" name="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/><br/>

                    {!passwordsMatch && <div className='note-text'>Passwords do not match</div>}

                    <input type="submit" value="Sign Up"/>
                    <div className='sign-up-page'></div>
                </form>
                )}

                {// code to display the form only if waiting on confirmation
                state === SIGN_IN_STATES.CONFIRM && (
                <form onSubmit={handleConfirmation} >
                    <div className='note-text'> Check your email for confirmation </div>
                    <div className='username-block'>
                        <div className='username-text'>
                            Enter Confirmation Code = {/*userDetails.preferred_username*/}
                        </div>
                        <input  type="number" name="confirmationCode" onChange={(e) => setCode(e.target.value)} required/><br/>
                    </div>
                    <input type="submit" value="Confirm Code"/>
                </form>
                )}

                {// code to display the form only if at start of sign in
                state === SIGN_IN_STATES.SIGNED_IN && (
                    <div >
                        <button onClick={() => {navigate('/Home')}}>Click To Go To the main Menu</button>
                        <button onClick={() => {navigate('/Profile')}}>Click To Go To Your Profile</button>
                        <button onClick={() => {signOut(); navigate('/Home');}}>Sign out</button> 
                    </div>
                    )}
    
                

            </div>
        </>
    );
}


export default SignUp;