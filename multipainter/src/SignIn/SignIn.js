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
                        <input type="password" name="password" required/><br/>    
                    </div>     
                    <input type="submit" value="Sign In"/>
                </form>
            </div>
        </>
    );
}
