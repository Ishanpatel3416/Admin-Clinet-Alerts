import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
      <div className="dashboard">
        <aside className="sidebar">
          <nav>
            <ul className="nav">
              <li>
                <NavLink to="/" end>
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/users">Users & Roles</NavLink>
              </li>
              <li>
                <NavLink to="/limits">Limits & Cost Controls</NavLink>
              </li>
              <li>
                <NavLink to="/domain">Domain & SSO</NavLink>
              </li>
              <li>
                <NavLink to="/billing">Billing</NavLink>
              </li>
              <li>
                <NavLink to="/logs">Logs & Exports</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="content">
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
      </div>
    </Router>
  );
};

export default App;
