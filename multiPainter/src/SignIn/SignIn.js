import './signIn.css';
import React from 'react';

export default function SignIn() {
    return(
        <div class="container">
        <h1>MultiPixel</h1>
        <form action="your-action-here" method="post">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <input type="submit" value="Sign In">
        </form>
        </div>
    );
}