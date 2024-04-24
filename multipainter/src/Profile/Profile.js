import React from 'react';
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <h1 className="profile-title">My Profile</h1>
            <div className="profile-info">
                <div className="profile-picture"></div>
                <div className="profile-details">
                    <h2 className="profile-username">Username</h2>
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
