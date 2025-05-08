import React from 'react';

const FeaturedRoutes = () => {
  const routes = [
    { from: 'Mumbai', to: 'Pune' },
    { from: 'Delhi', to: 'Chandigarh' },
    { from: 'Agra', to: 'Delhi' },
    { from: 'Indore', to: 'Bhopal' },
    { from: 'Jabalpur', to: 'Delhi' },
    { from: 'Bangalore', to: 'Chennai' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <h3 className="text-2xl font-bold text-center mb-8">Featured Routes</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {routes.map((route, idx) => (
          <div key={idx} className="bg-white p-6 shadow rounded text-center">
            <p className="text-lg font-semibold">{route.from} → {route.to}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRoutes;
