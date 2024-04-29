import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {fetchUserAttributes, signOut, getCurrentUser } from 'aws-amplify/auth';
import { GenerateBoard, compareAWSDateTime } from '../Community/Community';
import { getUserTemplate } from '../utilities/DataBaseQueries';

import './Profile.css';




export default function Profile() {
    const navigate = useNavigate(); 
    const [userTemplates, setUserTemplates] = useState([]);

    // do initial check if user is authenticated, and then continue 
    // grabs user details at the same time.
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {   
        async function currentAuthenticatedUser() {
            try {
              const {userId} = await getCurrentUser();
              setUserDetails(await fetchUserAttributes());

              // get the templates
              const queryTemplates = await getUserTemplate(userId);
              setUserTemplates(queryTemplates.data.listTemplates.items.sort(compareAWSDateTime));
            } catch (err) {
              console.log(err);
              // navigate back to sign in 
              console.log("Not signed in");
              navigate('/Signin');    
            }
          } 
        currentAuthenticatedUser();

      }, []); 

    console.log(userDetails);


    return (
        <div className="profile-container">
            <button className='better-button' onClick={() => {signOut(); navigate('/Home')}}>Sign Out</button>
            <h1 className="profile-title">My Profile</h1>
            <div className="profile-info">
                <div className="profile-details">
                    <h2 className="profile-username">Username: {userDetails === null ? null : userDetails.preferred_username}</h2>
                    <h3 className="Email">Email: {userDetails === null ? null : userDetails.email}</h3>
                    <h3 >Change Password Option Coming Soon...</h3>
                </div>
            </div>
            <div className="art-gallery">
                <h2 className="gallery-title">My Pixel Art</h2>
                <div className="art-grid">
                    {userTemplates.map((template) => (
                        <GenerateBoard template={template} />
                    ))}
                </div>
            </div>
        </div>
    );
}
