// Infrastructure.js
import React from 'react';
import Hosting from '../images/hosting.svg';

const Infrastructure = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 mt-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                    {/* Text on the left */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Top-Tier Infrastructure</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Our hosting is built on state-of-the-art infrastructure located in Milwaukee datacenters. We ensure reliability, performance, and scalability for every application, backed by top-tier facilities and local support.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            You can trust Artisan Hosting to provide you with fast and dependable services, no matter the size of your project.
                        </p>
                    </div>
                    {/* Image on the right */}
                    <div className="lg:w-1/2">
                        <img alt="Datacenter" src={Hosting} className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
