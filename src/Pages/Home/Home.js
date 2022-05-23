import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Marquee from './Marquee';
import OurLoaction from './OurLoaction';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <OurLoaction></OurLoaction>
            <Marquee></Marquee>
            <Footer></Footer>
        </div>
    );
};

export default Home;