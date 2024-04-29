import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {fetchUserAttributes, signOut } from 'aws-amplify/auth';

import './Profile.css';




export default function Profile() {
    const navigate = useNavigate(); 

    // do initial check if user is authenticated, and then continue 
    // grabs user details at the same time.
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {   
        async function currentAuthenticatedUser() {
            try {
              const userAttributes  = await fetchUserAttributes();
              console.log(`This is the attributes ${userAttributes}`)
              setUserDetails(userAttributes);
            } catch (err) {
              console.log(err);
              // navigate back to sign in 
              navigate('/Signin');    
            }
          } 
        currentAuthenticatedUser();

        if(userDetails === null){
            signOut(); // verify user is signed out
            navigate('/Signin')
        }
      }, []); 

    console.log(userDetails);


    return (
        <div className="profile-container">
            <button onClick={() => {signOut(); navigate('/Home')}}>Sign Out</button>
            <h1 className="profile-title">My Profile</h1>
            <div className="profile-info">
                <div className="profile-picture"></div>
                <div className="profile-details">
                    <h2 className="profile-username">{userDetails.preferred_name}</h2>
                    <p className="profile-biography">Placeholder for user's profile</p>
                    <h3 className="profile-bio-title">Biography</h3>
                    <p className="profile-bio-content">Placeholder for user's biography</p>
                </div>
            </div>
            <div className="art-gallery">
                <h2 className="gallery-title">My Pixel Art</h2>
                <div className="art-grid">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="art-box"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
