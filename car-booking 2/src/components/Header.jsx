import React from 'react';

const Header = () => {
    return (
        <header class="site-header">
            <h1 class="title">MORENT</h1>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search something here"/>
            </div>
            <div class="Profile_And_Notification">
                <button class="like">
                    <img src="src/assets/heart.png"/>
                </button>
                <button class="notification">
                    <div class="notif"></div>
                    <img src="src/assets/notification.png"/>
                </button>
                <button class="settings">
                    <img src="src/assets/setting-2.png"/>
                </button>
                <div class="profile">
                    <img src="src/assets/profile.png" alt="profile" class="profile-image"/>
                </div>
            </div>
        </header>
    );
};

export default Header;