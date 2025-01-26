import React from 'react';
import Infrastructure from '../components/Infrastructure';
import OpenSource from '../components/OpenSource';
import DataSecurity from '../components/DataSecurity';
import Services from '../components/OpenServices';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';

const HostedApplications = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>
            
            <div>
                <Infrastructure />
                <OpenSource />
                <DataSecurity />
                <Services />
            </div>

            <div>
                <Footer />
            </div>
        </>
        // <div>
        //     <Infrastructure />
        //     <OpenSource />
        //     <DataSecurity />
        //     <Services />
        // </div>
    );
};

export default HostedApplications;