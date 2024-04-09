import React from 'react';
import './SignIn.css';
import { Helmet } from 'react-helmet';

export default function SignIn() {
    return (
        <>
        <Helmet>
            <title>MultiPixel | SignIn </title>
        </Helmet>

            <div className="container">
                <form action="your-action-here" method="post">
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
                        Dont have an account yet? <a href='/create-account'>Sign Up</a>
                    </div>
                </form>
            </div>
        </>
    );
}
