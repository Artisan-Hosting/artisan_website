import HostingProcess from '../components/Process';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { useEffect } from 'react';
// impoty useDocTitle

const Process = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, []);

    useDocTitle('The Artisan Process');

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <HostingProcess />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Process;