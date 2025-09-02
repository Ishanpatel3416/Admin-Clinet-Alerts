import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'editor';
  joined: string;
}

const UsersRoles: React.FC = () => {
  const [users] = useState<User[]>([]); // to be populated from backend

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook up invite user action
  };

  return (
    <section>
      <h2>Users & Roles</h2>
      <div>
        {/* TODO: Populate invite link */}
        <h3>Share Invite Link</h3>
        <input readOnly value="" placeholder="Invite link" />
        <button type="button">Copy Link</button>
      </div>
      <form onSubmit={handleInvite}>
        <h3>Invite User</h3>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <select defaultValue="editor">
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>
        <button type="submit">Send Invite</button>
      </form>
      <h3>Team Members</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {/* TODO: Enable role change */}
                {user.role}
              </td>
              <td>{user.joined}</td>
              <td>
                {/* TODO: Enable remove user */}
                {user.role !== 'admin' && <button>Remove</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UsersRoles;
