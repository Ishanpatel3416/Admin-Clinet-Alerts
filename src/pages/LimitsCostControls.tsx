import React, { useState } from 'react';

interface Allocation {
  user: string;
  email: string;
  newsletters: number;
  entitiesUsed: number;
  entitiesTotal: number;
  backfillsUsed: number;
  backfillsTotal: number;
}

interface Request {
  when: string;
  requester: string;
  type: string;
  amount: string;
  justification: string;
  impact: string;
}

const LimitsCostControls: React.FC = () => {
  const [allocations] = useState<Allocation[]>([]); // populate from backend
  const [requests] = useState<Request[]>([]); // populate from backend

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook up request submission
  };

  return (
    <section className="page">
      <h2>Limits & Cost Controls</h2>
      <div>
        <h3>Overview</h3>
        <ul>
          <li>Total entities currently:</li>
          <li>maxNewsletters per recipient:</li>
          <li>maxItemsPerRecipient:</li>
          <li>backfillCapDays:</li>
          <li>concurrentBackfills:</li>
        </ul>
      </div>
      <div>
        <h3>Allocation</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Current Newsletter Setup</th>
              <th>Entities Used / Total</th>
              <th>Backfill Credits Used / Total</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((a) => (
              <tr key={a.email}>
                <td>{a.user}</td>
                <td>{a.email}</td>
                <td>{a.newsletters}</td>
                <td>
                  {a.entitiesUsed} / {a.entitiesTotal}
                </td>
                <td>
                  {a.backfillsUsed} / {a.backfillsTotal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Requests</h3>
        <form onSubmit={handleRequest}>
          {/* TODO: Implement request form */}
          <select defaultValue="limit">
            <option value="limit">Higher Limits</option>
            <option value="entities">Extra Entities</option>
            <option value="backfill">Backfill Credits</option>
          </select>
          <input placeholder="Amount" />
          <input placeholder="Justification" />
          <input placeholder="Impact" />
          <button type="submit">Submit Request</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>When</th>
              <th>Requester</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Justification</th>
              <th>Impact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r, idx) => (
              <tr key={idx}>
                <td>{r.when}</td>
                <td>{r.requester}</td>
                <td>{r.type}</td>
                <td>{r.amount}</td>
                <td>{r.justification}</td>
                <td>{r.impact}</td>
                <td>
                  {/* TODO: Approve/deny actions */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LimitsCostControls;
