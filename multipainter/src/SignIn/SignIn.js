import React from 'react';
import './SignIn.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { Link } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();  // Use useNavigate and assign it to navigate

    const handleSignIn = (event) => {
        event.preventDefault();  // Prevent the default form submission
        // Here you would typically handle your login logic
        // For demonstration, let's assume login is always successful
        navigate('/Profile');  // Navigate to the home page upon successful login
    };

    return (
        <>
        <Helmet>
            <title>MultiPixel | SignIn </title>
        </Helmet>

            <div className="container">
                <form onSubmit={handleSignIn}>
                    <div className='username-block'>
                        <div className='username-text'>
                        Username
                        </div>
                        <input type="text" name="username" required/><br/>
                    </div>
                    <div className='password-block'>
                        <div className='password-text'>
                            Password
                        </div>
                        <div className='forgot-password'>
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                        
                    </div>   
                    <input type="password" name="password" required/><br/>   
                    <input type="submit" value="Sign In"/>
                    <div className='sign-up-page'>
                        Dont have an account yet? <Link to="/SignUp">Sign Up!</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
