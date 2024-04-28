import {React, useState} from 'react';
import './SignIn.css';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { signIn } from 'aws-amplify/auth';





export default function SignInPage() {
    const navigate = useNavigate();  // Use useNavigate and assign it to navigate

    // useStates for pw and email (username)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(event) {
        event.preventDefault();  // Prevent the default form submission
        // Here you would typically handle your login logic
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
            navigate('/Profile');  // Navigate to the home page upon successful login
          } catch (error) {
            console.log('error signing in', error);
          }
        // For demonstration, let's assume login is always successful
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
                          Email
                        </div>
                        <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} required/><br/>
                    </div>
                    <div className='password-block'>
                        <div className='password-text'>
                            Password
                        </div>
                        <div className='forgot-password'>
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                        
                    </div>   
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/><br/>   
                    <input type="submit" value="Sign In"/>
                    <div className='sign-up-page'>
                        Dont have an account yet? <Link to="/SignUp">Sign Up!</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
