import React from 'react';

const Overview: React.FC = () => {
  // TODO: Replace placeholders with real data from backend
  return (
    <section className="page">
      <h2>Overview</h2>
      <div>
        <p>Domain: </p>
        <p>Plan start date: </p>
        <p>Total number of users currently: </p>
      </div>
      <div>
        {/* TODO: Wire up quick actions */}
        <button>Open Intel Workspace</button>
      </div>
    </section>
  );
};

export default Overview;
