import React, { useState } from 'react';
import ReservationForm from '../Forms/ReservationForm';
import '../Styles/Reservation.css';

const initialReservations = [
  { id: 1, name: "John Doe", date: "2023-07-20", time: "18:00", guests: 4, status: "Confirmed" },
  { id: 2, name: "Jane Smith", date: "2023-07-21", time: "19:00", guests: 2, status: "Pending" },
];

export const Reservations = () => {
  const [reservations, setReservations] = useState(initialReservations);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentReservation, setCurrentReservation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredReservations = reservations.filter(res => 
    res.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddReservation = (newReservation) => {
    setReservations([...reservations, { ...newReservation, id: Date.now() }]);
  };

  const handleEditReservation = (updatedReservation) => {
    setReservations(
      reservations.map(res => 
        res.id === updatedReservation.id ? updatedReservation : res
      )
    );
  };

  const handleRemoveReservation = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
  };

  const openEditForm = (reservation) => {
    setCurrentReservation(reservation);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentReservation(null);
  };

  return (
    <div className="reservation-management-container">
      <h1>Customer Reservations</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setIsFormOpen(true)}>Add Reservation</button>

      {isFormOpen && (
        <ReservationForm
          reservation={currentReservation}
          onAdd={handleAddReservation}
          onEdit={handleEditReservation}
          onClose={closeForm}
        />
      )}

      <table className="reservations-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.map(res => (
            <tr key={res.id}>
              <td>{res.name}</td>
              <td>{res.date}</td>
              <td>{res.time}</td>
              <td>{res.guests}</td>
              <td>{res.status}</td>
              <td>
                <button onClick={() => openEditForm(res)}>Edit</button>
                <button onClick={() => handleRemoveReservation(res.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
