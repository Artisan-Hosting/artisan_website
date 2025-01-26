// Services.js
import React from 'react';

const services = [
    { name: 'WordPress Hosting', useCase: 'Blogging and business websites', price: 'From $15/month' },
    { name: 'Discourse', useCase: 'Community forums and discussions', price: 'From $75/month' },
    { name: 'Ghost', useCase: 'Lightweight CMS for content creators', price: 'From $20/month' },
    { name: 'Moodle', useCase: 'Learning management system (LMS)', price: 'From $30/month' },
    { name: 'Matomo', useCase: 'Self-hosted web analytics', price: 'From $25/month' },
    { name: 'Plausible', useCase: 'Another opensource web analytics software', price: 'From $20/month' },
    { name: 'OpenProject', useCase: 'Project management and collaboration', price: 'From $2300/year / $190/month No user limit' },
    // { name: 'ERPNext', useCase: 'Enterprise resource planning (ERP)', price: 'From $50/month' }
];

const Services = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Applications we Host</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-blue-900">{service.name}</h3>
                            <p className="text-gray-700">{service.useCase}</p>
                            <p className="text-blue-900 font-bold">{service.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
