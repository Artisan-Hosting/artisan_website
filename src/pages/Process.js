import HostingProcess from '../components/Process';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
// impoty useDocTitle

const Process = () => {
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