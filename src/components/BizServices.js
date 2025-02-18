import React from 'react';
import img from '../images/web.svg';
import img3 from '../images/hosting.svg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        How can Artisan Hosting empower you?
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">

                        {/* Developer-focused Block */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="font-semibold my-4 text-2xl text-center">For Developers</h2>
                                <p className="text-md font-medium">
                                    Looking for a reliable push-to-deploy hosting solution? Artisan Hosting provides a developer-friendly experience similar to GitHub and Cloudflare pages.
                                    As simple as push to a branch, take a sip of coffee, then see your changes live.
                                </p>
                            </div>
                        </div>

                        {/* Small Business-focused Block */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center">For Small Businesses</h2>
                                <p className="text-md font-medium">
                                    Need a highly available application deployed. Need turnkey applications deployed "Nextcloud, Owncloud " and so on. Our infrastructure is hosted in the best datacenters in the milwaukee area. 
                                    Need a highly available application without the hassle of managing infrastructure? Whether it’s turnkey solutions like Nextcloud or custom deployments, Artisan Hosting ensures your software is always available when you need it. Powered by Milwaukee’s top-tier datacenters, we handle the infrastructure—so you can focus on building.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
