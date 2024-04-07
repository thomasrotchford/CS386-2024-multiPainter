import React from 'react';
import './signIn.css';

export default function SignIn() {
    return (
        <>
            <div className="container">
                <h1>MultiPixel</h1>
                <form action="your-action-here" method="post">
                    <input type="text" name="username" placeholder="Username" required/><br/>
                    <input type="password" name="password" placeholder="Password" required/><br/>
                    <input type="submit" value="Sign In"/>
                </form>
            </div>
        </>
    );
}
