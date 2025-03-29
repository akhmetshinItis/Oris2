import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext'; 
import { Link } from 'react-router-dom';

const Header = () => {
    const { setSearchQuery } = useContext(SearchContext);

    const handleSearchChange = (e) => {
        const newValue = e.target.value.toLowerCase();
        setSearchQuery(newValue);
    };

    return (
        <header>
            <div className='site-header row headerPC'>
                <div className="col-2 d-flex justify-content-center">
                    <Link to="/"><h1 className="title">MORENT</h1></Link>
                </div>
                <div className='col-5'>
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search something here"
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className='col-3 offset-2 d-flex justify-content-center'>
                    <div className="Profile_And_Notification">
                        <button className="like">
                            <img src="/images/heart.png" alt="Like" />
                        </button>
                        <button className="notification">
                            <div className="notif"></div>
                            <img src="/images/notification.png" alt="Notification" />
                        </button>
                        <button className="settings">
                            <img src="/images/setting-2.png" alt="Settings" />
                        </button>
                        <div className="profile">
                            <img src="/images/profile.png" alt="Profile" className="profile-image" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='site-header row headerMobile'>
                <div className="col-7 pl-5">
                    <Link to="/"><h1 className="title">MORENT</h1></Link>
                </div>
                <div className='col-5 d-flex justify-content-end pr-5'>
                    <div className="Profile_And_Notification2">
                        <div className="profile">
                            <img src="/images/profile.png" alt="Profile" className="profile-image" />
                        </div>
                    </div>
                </div>
                <div className='col-12 px-5'>
                    <div className='row '>
                        <input
                            type="text"
                            className="search-input2"
                            placeholder="Search something here"
                            onChange={handleSearchChange}
                        />
                        <button className='settings-button'></button>
                    </div>
                </div>
            </div>

            <div className='site-header row headerMobileDetail'>
                <div className='col-7 pl-5'>
                    <button className='leftmenu-button'><i className='fas fa-bars'></i></button>
                </div>
                <div className='col-5 d-flex justify-content-end pr-5'>
                    <div className="Profile_And_Notification2">
                        <div className="profile">
                            <img src="/images/profile.png" alt="Profile" className="profile-image" />
                        </div>
                    </div>
                </div>
                <div className="col-12 pl-5">
                    <Link to="/"><h1 className="title">MORENT</h1></Link>
                </div>
                <div className='col-12 px-5'>
                    <div className='row '>
                        <input
                            type="text"
                            className="search-input2"
                            placeholder="Search something here"
                            onChange={handleSearchChange}
                        />
                        <button className='settings-button'></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;