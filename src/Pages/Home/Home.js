import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';
import Marquee from './Marquee';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marquee></Marquee>
            <Footer></Footer>
        </div>
    );
};

export default Home;