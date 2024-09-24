import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingDeliverables = () => {
    const [selectedPlans, setSelectedPlans] = useState({
        staging: false,
        production: false,
        engineer: false,
        domain: false,
    });

    const pricingPlans = [
        {
            id: 'staging',
            name: 'Staging / Simple Environment',
            price: 35, // starting price
            description: 'Starting at $35/month',
            deliverables: [
                '1 Staging Server',
                'DNS Management Assistance (optional)',
                'Performance monitoring',
                'Git integration for smooth updates',
                '500Mb Nominal usage',
            ],
        },
        {
            id: 'production',
            name: 'Production Environment',
            price: 150, // fixed price
            description: '$150/month',
            deliverables: [
                '1 Production Server',
                'High performance for up to 2500 concurrent connections',
                'Daily backups',
                'Advanced monitoring with Artisan Health Check',
                'SSL & DNS setup',
                '1GB nominal usage',
            ],
        },
        {
            id: 'engineer',
            name: 'Engineer Support',
            price: 250, // fixed price
            description: '$250/month',
            deliverables: [
                'Up to 15 hours of dedicated support',
                'Direct access to engineer for project updates',
                'Performance optimizations and troubleshooting',
                'Initial deployment configuration support',
            ],
        },
        {
            id: 'domain',
            name: 'Domain Assistance (Optional)',
            price: 20, // optional price
            description: '$20/month',
            deliverables: [
                'Domain name setup',
                'DNS management',
                'Custom domain options',
                'For clients unfamiliar with DNS management',
            ],
        },
    ];

    // Function to handle plan selection
    const handleSelection = (planId) => {
        setSelectedPlans({
            ...selectedPlans,
            [planId]: !selectedPlans[planId],
        });
    };

    // Calculate total cost
    const calculateTotal = () => {
        let total = 0;
        for (const plan of pricingPlans) {
            if (selectedPlans[plan.id]) {
                total += plan.price;
            }
        }
        return total;
    };

    // Calculate discounted totals
    const calculateDiscountedTotal = (months) => {
        const total = calculateTotal();
        const discount = total * 0.08; // 8% discount
        return (total * months) - (discount * months);
    };

    return (
        <div className="mt-8 bg-gray-100 py-12">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Pricing & Deliverables</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Tailored Hosting Solutions to Match Your Needs</h2>
                </div>

                <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8">
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-4">
                        {pricingPlans.map((plan) => (
                            <div key={plan.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                                <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">{plan.name}</h3>
                                <p className="text-center text-4xl font-bold text-blue-700 mb-6">{plan.description}</p>
                                <ul className="mb-6 flex-1">
                                    {plan.deliverables.map((deliverable, idx) => (
                                        <li key={idx} className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{deliverable}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-center">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            checked={selectedPlans[plan.id]}
                                            onChange={() => handleSelection(plan.id)}
                                        />
                                        <span className="ml-2 text-gray-700">Select</span>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <h3 className="text-2xl text-blue-900 font-bold">Estimated Total: ${calculateTotal()}/month</h3>
                    <h4 className="text-xl text-blue-900">6 Months Total (8% Discount): ${calculateDiscountedTotal(6)}</h4>
                    <h4 className="text-xl text-blue-900">1 Year Total (8% Discount): ${calculateDiscountedTotal(12)}</h4>

                    <Link
                        to="/schedule"
                        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-8 py-4 mt-4 text-lg shadow-xl rounded-2xl"
                    >
                        Put a date on it and lets make it happen !
                    </Link>
                    <span>
                        <p className='mt-4'> *Nominal usage: average RAM usage excluding time spent building or re-deploying applications </p>
                    </span>
                </div>
            </section>
        </div>
    );
}

export default PricingDeliverables;
