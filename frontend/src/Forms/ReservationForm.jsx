// src/Forms/ReservationForm.js
import React, { useState, useEffect } from 'react';

const ReservationForm = ({ reservation, onAdd, onEdit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    status: 'Pending', // Default status
  });

  useEffect(() => {
    if (reservation) {
      setFormData(reservation);
    } else {
      setFormData({ name: '', date: '', time: '', guests: 1, status: 'Pending' });
    }
  }, [reservation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reservation) {
      onEdit(formData);
    } else {
      onAdd(formData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      />
      <input
        type="number"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        min="1"
        required
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        required
      >
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <button type="submit">{reservation ? 'Update' : 'Add'} Reservation</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default ReservationForm;
