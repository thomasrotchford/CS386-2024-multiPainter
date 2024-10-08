import {React, useState, useEffect} from 'react';
import './SignIn.css';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { signIn, getCurrentUser } from 'aws-amplify/auth';

// auth configuration files
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);



export default function SignInPage() {
    const navigate = useNavigate();  // Use useNavigate and assign it to navigate

    // useStates for pw and email (username)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {   
        async function currentAuthenticatedUser() {
            try {
              await getCurrentUser();
              console.log("User is already signed in")
              navigate('/Profile');
            } catch (err) {
              console.log(err);
              // navigate back to sign in 
              //navigate('/Signin');    
            }
          } 
        currentAuthenticatedUser();
      }, []); 


    async function handleSignIn(event) {
        event.preventDefault();  // Prevent the default form submission
        // Here you would typically handle your login logic
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
            console.log(nextStep);
            if(isSignedIn){
                navigate('/Profile');  // Navigate to the home page upon successful login
                console.log("user is signed in")
            } else {
                alert("Wrong Username or Password");
            }
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
