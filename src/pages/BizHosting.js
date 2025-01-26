import React from "react";
import BusinessHosting from "../components/BizHosting";
import Service from "../components/BizServices";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const BusinessHostingPage = () => {
    return (
        <>
        <NavBar/>
        <BusinessHosting/>
        <Footer/>
        </>
    )
}

export default BusinessHostingPage