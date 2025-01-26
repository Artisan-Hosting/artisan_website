// OpenSource.js
import React from 'react';
import Computer from '../images/Web-developer.svg';

const OpenSource = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-8">Open-Source Transparency with Responsible Use</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="lg:w-1/2 mx-auto lg:text-left">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At Artisan Hosting, we build our platform using open-source tools, ensuring transparency and freedom for our clients. We encourage everyone to explore, use, and even modify our software. We only ask that if you’re using our software in a commercial setting, please credit Artisan Hosting and refer to our <a href="https://github.com/ArtisanHosting/license" className="text-blue-900 underline">simple license</a> on GitHub.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our applications are fully open-source, but we won’t white-label them unless specifically requested by clients. This ensures transparency and keeps the integrity of open-source software intact.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            While we love open-source, security is critical for our business. We review and may revert changes to ensure they don’t introduce vulnerabilities, maintaining a secure environment for all.
                        </p>
                    </div>
                    <div className="lg:w-1/2 mx-auto lg:text-left">
                        <img alt="Open Source" src={Computer} className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OpenSource;
