import PricingDeliverables from '../components/Pricing';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
// impoty useDocTitle

const Pricing = () => {
    useDocTitle('The Artisan Pricing');

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <PricingDeliverables />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Pricing;