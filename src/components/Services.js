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
                                    For our developers, we offer a custom-built, in-house CI/CD system. A push-to-deploy style solution with individual branch tracking and workflow monitoring. Every change is captured and built, but only when you decide. Simply push to a branch, take a sip of coffee, and let Artisan Hosting handle the rest. By the time you’re back, your project is seamlessly redeployed—whether to a single instance or a million.
                                </p>
                            </div>
                        </div>

                        {/* Small Business-focused Block */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={developer} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Web Developers and Studios</h2>
                                <p className="text-md font-medium">
                                    Artisan Hosting partners with the region’s top datacenters to keep your applications online and resilient. Need a highly available site? Done. A separate staging environment for final reviews before going live? Done. Whether you just need powerful VMs or want to hand us your repo and let us handle the rest, we ensure your project is always secure, stable, and fast.
                                </p>
                            </div>
                        </div>

                        {/* Small Business-focused Block */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center">For Businesses</h2>
                                <p className="text-md font-medium">
                                    Artisan Hosting helps businesses modernize their infrastructure with cost-effective solutions. Whether you need to migrate an existing website, port internal services, or deploy custom applications, we handle the heavy lifting. Our expert-managed platform ensures security, scalability, and seamless performance. Let Artisan Hosting focus on your servers so you can focus on running your business.
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
