import React, { useState } from 'react';
import '../Styles/OrderManagement.css';
import { OrderForm } from '../Forms/OrderForm';

const initialOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    items: [{ name: 'Pizza', quantity: 2 }, { name: 'Burger', quantity: 1 }],
    total: 30.00,
    status: 'Pending',
    receipt: '',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    items: [{ name: 'Pasta', quantity: 1 }],
    total: 12.50,
    status: 'Completed',
    receipt: '',
  },
];

export const Order = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
  };

  const handleEditOrder = (updatedOrder) => {
    setOrders(
      orders.map(order =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  };

  const handleRemoveOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const openEditForm = (order) => {
    setCurrentOrder(order);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentOrder(null);
  };

  const generateReceipt = (order) => {
    const receipt = `
      Receipt for Order #${order.id}\n
      Customer: ${order.customerName}\n
      Items:\n
      ${order.items.map(item => `${item.name} x ${item.quantity}`).join('\n')}
      \n
      Total: $${order.total.toFixed(2)}\n
      Status: ${order.status}
    `;
    return receipt;
  };

  const viewReceipt = (order) => {
    const receipt = generateReceipt(order);
    setOrders(
      orders.map(o => (o.id === order.id ? { ...o, receipt } : o))
    );
  };

  return (
    <div className="order-management-container">
      <h1>Order Management</h1>

      <button className="btn add-order" onClick={() => setIsFormOpen(true)}>Add Order</button>

      {isFormOpen && (
        <OrderForm
          order={currentOrder}
          onAdd={handleAddOrder}
          onEdit={handleEditOrder}
          onClose={closeForm}
        />
      )}

      <table className="orders-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customerName}</td>
              <td>
                {order.items.map(item => (
                  <div key={item.name}>{item.name} x {item.quantity}</div>
                ))}
              </td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                <button className="btn edit" onClick={() => openEditForm(order)}>Edit</button>
                <button className="btn remove" onClick={() => handleRemoveOrder(order.id)}>Remove</button>
                <button className="btn view-receipt" onClick={() => viewReceipt(order)}>View Receipt</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {orders.map((order) => (
        order.receipt && (
          <div key={order.id} className="receipt">
            <h3>Receipt for Order #{order.id}</h3>
            <pre>{order.receipt}</pre>
          </div>
        )
      ))}
    </div>
  );
};
