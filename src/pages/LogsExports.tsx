import React, { useState } from 'react';

interface LogEntry {
  time: string;
  actor: string;
  action: string;
  target: string;
  before: string;
  after: string;
  ip: string;
}

const LogsExports: React.FC = () => {
  const [logs] = useState<LogEntry[]>([]); // populate from backend

  return (
    <section>
      <h2>Logs & Exports</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Actor</th>
            <th>Action</th>
            <th>Target</th>
            <th>Before</th>
            <th>After</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              <td>{log.time}</td>
              <td>{log.actor}</td>
              <td>{log.action}</td>
              <td>{log.target}</td>
              <td>{log.before}</td>
              <td>{log.after}</td>
              <td>{log.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default LogsExports;
