import React, { useState } from 'react';

interface Invoice {
  invoiceNo: string;
  date: string;
  recurringAmount: string;
  extraAmount: string;
  totalAmount: string;
  status: string;
}

const Billing: React.FC = () => {
  const [invoices] = useState<Invoice[]>([]); // to be fetched from backend

  return (
    <section className="page">
      <h2>Billing</h2>
      <table>
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Date</th>
            <th>Recurring Amount</th>
            <th>Extra Amount</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.invoiceNo}>
              <td>{inv.invoiceNo}</td>
              <td>{inv.date}</td>
              <td>{inv.recurringAmount}</td>
              <td>{inv.extraAmount}</td>
              <td>{inv.totalAmount}</td>
              <td>{inv.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Billing;
