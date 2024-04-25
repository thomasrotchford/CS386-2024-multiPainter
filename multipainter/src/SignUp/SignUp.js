import React from 'react';
import './SignUp.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

export default function SignIn() {
    const navigate = useNavigate();  // Use useNavigate and assign it to navigate

    const handleSignIn = (event) => {
        event.preventDefault();  // Prevent the default form submission
        // Here you would typically handle your login logic,
        // For demonstration, let's assume login is always successful
        navigate('/Profile');  // Navigate to the home page upon successful login
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
                          <input type="text" name="password" required/><br/>
                        

                    <div className='password-block'>
                        <div className='password-text'>
                            Confirm Password
                        </div>
                        </div>   
                        <input type="text" name="confirmpassword" required/><br/>

                    <input type="submit" value="Sign Up"/>
                    <div className='sign-up-page'>

                    </div>
                </form>
            </div>
        </>
    );
}
