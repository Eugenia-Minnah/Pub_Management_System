import React, { useState } from 'react';
import MenuItemForm from '../Forms/MenuItemForm'; 
import '../Styles/Menu.css';

const initialMenuItems = [
  { id: 1, name: 'Pizza', price: 12.99, category: 'Main Course', description: 'Delicious cheese pizza' },
  { id: 2, name: 'Burger', price: 8.99, category: 'Main Course', description: 'Juicy beef burger' },
];

export const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrEditItem = (item) => {
    if (currentItem) {
      setMenuItems(menuItems.map(i => (i.id === item.id ? item : i)));
    } else {
      setMenuItems([...menuItems, { ...item, id: menuItems.length + 1 }]);
    }
    closeForm();
  };

  const openEditForm = (item) => {
    setCurrentItem(item);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentItem(null);
  };

  const handleRemoveItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="menu-management-container">
      <h1>Menu Management</h1>
      <input
        type="text"
        placeholder="Search Menu Items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setIsFormOpen(true)}>Add Menu Item</button>

      {isFormOpen && (
        <MenuItemForm
          item={currentItem}
          onAddOrEdit={handleAddOrEditItem}
          onClose={closeForm}
        />
      )}

      <table className="menu-items-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => openEditForm(item)}>Edit</button>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

