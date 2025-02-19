import React from 'react';
import img from '../images/web.svg';
import img3 from '../images/hosting.svg';
import developer from '../images/Web-developer.svg';
import consultate from '../images/consultation.svg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-14">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        What does Artisan Hosting offer?
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
                                    For developers we offer a custom built push-to-deploy solution with individual branch tracking. Similar to Github and Cloudflare pages in function.
                                    Push to a selected branch, take a small sip of coffee and watch how your project was seemlessly re-deployed.
                                </p>
                            </div>
                        </div>

                        {/* Small Business-focused Block */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={developer} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Web Developers and Studios</h2>
                                <p className="text-md font-medium">
                                    Artisan Hosting partners with the best datacenters in the region to keep your applications online and resilient. Need a high-availability website? A dedicated testing environment before pushing changes live? We provide the flexibility to develop the way your team works best. With Cloudflare’s CDN and expert management, your platform stays secure, stable, and always optimized.
                                </p>
                            </div>
                        </div>

                        {/* Small Business-focused Block */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center">For Businesses</h2>
                                <p className="text-md font-medium">
                                    Artisan Hosting helps businesses modernize their infrastructure with cost-effective solutions. Whether you need to migrate an existing website, port internal services, or deploy custom applications, we handle the heavy lifting. Our expert-managed platform ensures security, scalability, and seamless performance—so you can focus on running your business, not your servers.
                                </p>
                            </div>
                        </div>

                        {/* Small Business-focused Block */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={consultate} />
                                <h2 className="font-semibold my-4 text-2xl text-center">For Enterprise</h2>
                                <p className="text-md font-medium">
                                    Set your phazer to stun, and not your infrastructe. We can provide embedded support engineers who integrate with your team, offering deep insight into your projects. Whether you’re deploying large-scale applications, optimizing workloads, or ensuring seamless integration with our platform, our experts work alongside you to keep things running smoothly. Gain hands-on support, proactive solutions, and infrastructure that grows with your needs—all without the overhead of managing it yourself.
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
