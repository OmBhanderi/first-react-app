import React, { useEffect } from 'react';
import { useUsers } from '../hooks/useUsers';

const UserList = () => {
  const { users, loading, error, loadUsers } = useUsers();


  useEffect(() => { 
    loadUsers();
  }, []); 

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  console.log(users);
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;