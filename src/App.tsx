import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import UsersRoles from './pages/UsersRoles';
import LimitsCostControls from './pages/LimitsCostControls';
import DomainSSO from './pages/DomainSSO';
import Billing from './pages/Billing';
import LogsExports from './pages/LogsExports';
import Support from './pages/Support';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul className="nav">
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/users">Users & Roles</Link></li>
          <li><Link to="/limits">Limits & Cost Controls</Link></li>
          <li><Link to="/domain">Domain & SSO</Link></li>
          <li><Link to="/billing">Billing</Link></li>
          <li><Link to="/logs">Logs & Exports</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<UsersRoles />} />
          <Route path="/limits" element={<LimitsCostControls />} />
          <Route path="/domain" element={<DomainSSO />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/logs" element={<LogsExports />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
