import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='my-5 md:my-8 lg:my-10 w-2/3 mx-auto'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>My Portfolio</h2>

            <div className='text-lg'>
                <h2><span className='font-bold'>Name: </span> Mahadi Hasan</h2>
                <h2><span className='font-bold'>Email: </span> mahadi2020dev@gmail.com</h2>
                <h2><span className='font-bold'>Education: </span> BSc in Civil Engineering.</h2>
                <h2 className='mt-3'>Despite of being from other background, I am passionate about Apps and Web site development. For my passion I have tried to learn web development from different open resources. As I have no academic background on web development, I've decided to take a online course on that topic. From the course. I've earned knowledge on the following: </h2>
                <p>* HTML5</p>
                <p>* CSS3</p>
                <p>* Bootstrap</p>
                <p>* Tailwind</p>
                <p>* Javascript</p>
                <p>* Node Js</p>
                <p>* React</p>
                <p>* React query</p>
                <p>* FIrebase Authentication</p>
                <p>* JSON Web Token</p>
                <br />
                <br />
                List of Three project:<br />
                1. <a className='text-primary' href="https://horizon-6e2ea.web.app/">Horizon Equipments Ltd.</a> <br />
                2. <a className='text-primary' href="https://greantech-eb5f3.web.app/">Green Tech Electronics</a><br />
                3. <a className='text-primary' href="https://laptop-mania.netlify.app/">Laptop Mania</a>


            </div>

        </div>
    );
};

export default Portfolio;