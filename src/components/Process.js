import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgConsultation from '../images/consultation.svg';
import imgHosting from '../images/hosting.svg';
import imgWebDev from '../images/web-dev.svg';
import imgDeveloper from '../images/Web-developer.svg';
import imgComputer from '../images/web.svg';

// Modal Component
const Modal = ({ show, onClose, title, content }) => {
    if (!show) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
                <p className="text-gray-700 mb-6">{content}</p>
                <button onClick={onClose} className="text-white bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md">
                    Close
                </button>
            </div>
        </div>
    );
};

const HostingProcess = () => {
    const [showModal, setShowModal] = useState(true);
    const [modalContent, setModalContent] = useState({ title: 'An error has occurred', content: 'This has been open at the wrong time. Please use the contact button in the footer to report this error' });

    const handleOpenModal = (title, content) => {
        setModalContent({ title, content });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="bg-gray-100 py-12 lg:mt-4">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Hosting Process</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        A Step-by-Step Guide to Hosting with Artisan Hosting
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Step 1: Consultation */}
                        <div
                            className="bg-white rounded-lg shadow-2xl p-6 group cursor-pointer"
                            onClick={() => 
                                handleOpenModal('Step 1: Consultation', 'Schedule a meeting with our experts to discuss your unique goals and pain points with your application and its hosting. This will include things like, Compliance, Uptime requirements, Technologies used, Designated downtimes. This will ensure that we are all on the same page before we begin our work and research')}
                        >
                            <img alt="Consultation" className="h-24 mx-auto group-hover:scale-110 transition duration-500" src={imgConsultation} />
                            <h3 className="font-semibold my-4 text-2xl text-center text-blue-900">Step 1: Consultation</h3>
                            <p className="text-md font-medium text-gray-700 text-center">
                                Schedule a meeting with our experts to discuss your unique hosting needs.
                            </p>
                        </div>

                        {/* Step 2: Requirement Analysis */}
                        <div
                            className="bg-white rounded-lg shadow-2xl p-6 group cursor-pointer"
                            onClick={() => 
                                handleOpenModal('Step 2: Requirement Analysis', 'We analyze your requirement to create a customized hosting plan. This will outline building processes and ideal deployment specifications for your application.')}
                        >
                            <img alt="Requirement Analysis" className="h-24 mx-auto group-hover:scale-110 transition duration-500" src={imgWebDev} />
                            <h3 className="font-semibold my-4 text-2xl text-center text-blue-900">Step 2: Requirement Analysis</h3>
                            <p className="text-md font-medium text-gray-700 text-center">
                                We analyze your requirements to tailor a hosting solution that fits you perfectly.
                            </p>
                        </div>

                        {/* Step 3: Custom Solution Design */}
                        <div
                            className="bg-white rounded-lg shadow-2xl p-6 group cursor-pointer"
                            onClick={() => 
                                handleOpenModal('Step 3: Custom Solution Design', 'Our team executes what we\'ve defined in the hosting plan. This may even included building systems on our end to ensure reliability and scalability for your needs.')}
                        >
                            <img alt="Custom Solution Design" className="h-24 mx-auto group-hover:scale-110 transition duration-500" src={imgComputer} />
                            <h3 className="font-semibold my-4 text-2xl text-center text-blue-900">Step 3: Custom Solution Design</h3>
                            <p className="text-md font-medium text-gray-700 text-center">
                                Our team designs a custom hosting plan optimized for performance and scalability.
                            </p>
                        </div>

                        {/* Step 4: Implementation */}
                        <div
                            className="bg-white rounded-lg shadow-2xl p-6 group cursor-pointer"
                            onClick={() => handleOpenModal('Step 4: Implementation', 'We handle the entire implementation process, from migrations to setup, ensuring everything runs smoothly.')}
                        >
                            <img alt="Implementation" className="h-24 mx-auto group-hover:scale-110 transition duration-500" src={imgHosting} />
                            <h3 className="font-semibold my-4 text-2xl text-center text-blue-900">Step 4: Implementation</h3>
                            <p className="text-md font-medium text-gray-700 text-center">
                                We set up your hosting environment, handle migrations, and configure all settings.
                            </p>
                        </div>

                        {/* Step 5: Launch */}
                        <div
                            className="bg-white rounded-lg shadow-2xl p-6 group cursor-pointer"
                            onClick={() => 
                                handleOpenModal('Step 5: Launch', 'We assist you through the launch process, making sure your site is live without any issues.')}
                        >
                            <img alt="Launch" className="h-24 mx-auto group-hover:scale-110 transition duration-500" src={imgWebDev} />
                            <h3 className="font-semibold my-4 text-2xl text-center text-blue-900">Step 5: Launch</h3>
                            <p className="text-md font-medium text-gray-700 text-center">
                                We assist you through the launch process to ensure everything runs smoothly.
                            </p>
                        </div>

                        {/* Step 6: Ongoing Support and Monitoring */}
                        <div
                            className="bg-white rounded-lg shadow-2xl p-6 group cursor-pointer"
                            onClick={() => handleOpenModal('Step 6: Ongoing Support', 'We provide continuous monitoring and support to ensure your hosting environment stays optimized.')}
                        >
                            <img alt="Support and Monitoring" className="h-24 mx-auto group-hover:scale-110 transition duration-500" src={imgDeveloper} />
                            <h3 className="font-semibold my-4 text-2xl text-center text-blue-900">Step 6: Ongoing Support</h3>
                            <p className="text-md font-medium text-gray-700 text-center">
                                Enjoy continuous support and monitoring to keep your services running optimally.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Modal for More Information */}
                <Modal
                    show={showModal}
                    onClose={handleCloseModal}
                    title={modalContent.title}
                    content={modalContent.content}
                />

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <Link to="/schedule" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 text-lg shadow-xl rounded-2xl">
                        Are you ready to get started ?
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 3.293a1 1 0 011.414 0L19 8.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L15.586 10H4a1 1 0 110-2h11.586L12.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HostingProcess;
