import React from 'react';

const DomainSSO: React.FC = () => {
  // TODO: Integrate with actual domain and SSO configuration data
  return (
    <section className="page">
      <h2>Domain & SSO</h2>
      <div>
        <h3>Domain Information</h3>
        <p>Domain: </p>
        <p>Status: </p>
        <p>This domain is verified and active for your account</p>
      </div>
      <div>
        <h3>SSO Configuration</h3>
        <p>Assertion Consumer Service URL:</p>
        <p>Entity ID:</p>
        <p>
          Need to add sub domains? Contact our admin support team at
          adminsupport@bynd.ai
        </p>
      </div>
    </section>
  );
};

export default DomainSSO;
