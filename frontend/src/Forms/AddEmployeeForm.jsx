// AddEmployeeForm.js
import React, { useState, useEffect } from 'react';
import '../Styles/AddEmployeeForm.css';

const AddEmployeeForm = ({ employee, onAdd, onEdit, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    if (employee) {
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setPhone(employee.phone);
      setAddress(employee.address);
      setPosition(employee.position);
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee) {
      onEdit({ ...employee, firstName, lastName, phone, address, position });
    } else {
      onAdd({ firstName, lastName, phone, address, position });
    }
    onClose();
  };

  return (
    <div className="add-employee-form">
      <h2>{employee ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <button type="submit">{employee ? 'Update Employee' : 'Add Employee'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
export default AddEmployeeForm;