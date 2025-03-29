import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext'; 

const Layout = () => {
    return (
        <div>
            <SearchProvider> 
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </SearchProvider>
        </div>
    );
};

export default Layout;