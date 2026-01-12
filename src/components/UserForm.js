import React, { useState } from 'react';
import { useUsers } from '../hooks/useUsers';

const UserForm = () => {
  const { addUser, loading } = useUsers();
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    
    if (!formData.name || !formData.email) {
      alert('Name and Email are required!');
      return;
    }

    await addUser(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    
    alert('User added successfully!');
  };

  return (
    <div className="user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;