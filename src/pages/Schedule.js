import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { useEffect } from "react";
import Cal from '@calcom/embed-react';


const Calendar = () => {
    useDocTitle('Artisan Hosting: Schedule initial consultation');
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, []);

    return (
        <>
        
            <div>
                <NavBar />
            </div>

            {/* <div id='cal' className="flex justify-center items-center mt-8 w-screen bg-white py-12 lg:py-24"> */}
            <div className='mt-40'>
                <Cal calLink='artisan-hosting/discovery-call'></Cal>
            </div>

            <Footer />

        </>

    );
}

export default Calendar;