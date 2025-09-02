import React from 'react';

const Support: React.FC = () => {
  // TODO: Replace with real FAQs and submission handler
  return (
    <section className="page">
      <h2>Support</h2>
      <div>
        <h3>FAQ</h3>
        <ul>
          <li>Q1: ...</li>
          <li>Q2: ...</li>
        </ul>
      </div>
      <div>
        <h3>Send Request</h3>
        <form>
          <input placeholder="Your Email" />
          <textarea placeholder="Describe your issue" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Support;
