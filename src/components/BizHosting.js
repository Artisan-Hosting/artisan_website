import React from 'react';
import Services from './BizServices'; // Import the Services component

const BusinessHosting = () => {
  return (
    <div className="bg-grayLight text-grayDark px-6 py-10">
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-primary">
          Turnkey Solutions for Small Businesses
        </h2>
        <p className="mt-4">
          Artisan Hosting offers ready-to-go, turnkey solutions for businesses, using powerful open-source tools that are trusted and widely adopted.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-secondary1">
          No User-Based Pricing
        </h3>
        <p className="mt-2">
          Unlike other services, we don’t charge per user or per term. Our pricing is based on the resources your business needs—whether it's hosting, managing, or scaling your infrastructure.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-secondary2">
          Flexible Infrastructure
        </h3>
        <p className="mt-2">
          Our infrastructure can be tailored to meet the specific needs of your business, ensuring you have the flexibility to scale and adapt as required.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-secondary3">
          Hybrid Hosting Solutions
        </h3>
        <p className="mt-2">
          Powered by both in-house hardware and Data Holdings datacenters, Artisan Hosting guarantees reliable and scalable hosting for your business.
        </p>
      </section>

      {/* Services Section - Targeted for Developers and Small Businesses */}
      <Services />

      <div className="mt-8">
        <a
          href="/get-started"
          className="bg-complementary text-white py-2 px-4 rounded-lg"
        >
          Explore Business Hosting Options
        </a>
      </div>
    </div>
  );
};

export default BusinessHosting;
