import React, { useState } from 'react';
import './SignUp.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'; 

export default function SignUp() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSignIn = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return; // Prevent form submission if passwords don't match
        }

        // Reset the passwords match state
        setPasswordsMatch(true);

        // Your login logic goes here
        navigate('/Profile');
    };

    return (
        <>
            <Helmet>
                <title>MultiPixel | SignUp </title>
            </Helmet>
            <div className="container">
                <form onSubmit={handleSignIn}>
                    <div className='note-text'> Note: Please do not use a password or username you use elsewhere </div>
                    <div className='username-block'>
                        <div className='username-text'>
                            Your Username
                        </div>
                        <input type="text" name="username" required/><br/>
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
            </div>
        </>
    );
}
