import React from 'react';
import './home.css'
import Main from '../../composants/main/Main';
import Sidebar from '../../composants/sidebar/Sidebar';
import Topbar from '../../composants/topbar/Topbar';
import Rightbar from '../../composants/rightbar/Rightbar'

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Main />
                <Rightbar />
            </div>
        </>
    );
};

export default Home;