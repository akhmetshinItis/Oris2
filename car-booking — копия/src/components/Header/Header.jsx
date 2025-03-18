import React from "react";

const Header = () => {
    return (
        <header className="site-header">
            <h1 className="title">MORENT</h1>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search something here" />
            </div>
            <div className="Profile_And_Notification">
                <button className="like">
                    <img src="src/assets/images/heart.png" alt="Like" />
                </button>
                <button className="notification">
                    <div className="notif"></div>
                    <img src="SRC/assets/images/notification.png" alt="Notification" />
                </button>
                <button className="settings">
                    <img src="SRC/assets/images/setting-2.png" alt="Settings" />
                </button>
                <div className="profile">
                    <img src="SRC/assets/images/profile.png" alt="Profile" className="profile-image" />
                </div>
            </div>
        </header>
    );
};

export default Header;