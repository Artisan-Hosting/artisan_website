import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Cal from '@calcom/embed-react';


const Calendar = () => {
    useDocTitle('Artisan Hosting: Schedule initial consultation');
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