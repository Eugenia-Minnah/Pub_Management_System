import React, { useState } from 'react';
import '../Styles/SideBar.css';
import Dashboard from '../Pages/Dashboard';
import { Order } from '../Pages/Order';
import { ManageMenu } from '../Pages/ManageMenu';
import { Inventory } from '../Pages/Inventory';
import { Reservations } from '../Pages/Reservations';
import { EmployeeAccounts } from '../Pages/EmployeeAccounts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ setActiveComponent }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (component, itemName) => {
    setActiveComponent(component);
    setActiveItem(itemName);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li className="menu-item back-button" onClick={() => setActiveComponent(<Dashboard />)}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </li>
          <li className={`menu-item ${activeItem === 'Dashboard' ? 'active' : ''}`} onClick={() => handleItemClick(<Dashboard />, 'Dashboard')}>Dashboard</li>
          <li className={`menu-item ${activeItem === 'Order' ? 'active' : ''}`} onClick={() => handleItemClick(<Order />, 'Order')}>Food Order</li>
          <li className={`menu-item ${activeItem === 'ManageMenu' ? 'active' : ''}`} onClick={() => handleItemClick(<ManageMenu />, 'ManageMenu')}>Manage Menu</li>
          <li className={`menu-item ${activeItem === 'Inventory' ? 'active' : ''}`} onClick={() => handleItemClick(<Inventory />, 'Inventory')}>Manage Inventory</li>
          <li className={`menu-item ${activeItem === 'Reservations' ? 'active' : ''}`} onClick={() => handleItemClick(<Reservations />, 'Reservations')}>Manage Reservations</li>
          <li className={`menu-item ${activeItem === 'EmployeeAccounts' ? 'active' : ''}`} onClick={() => handleItemClick(<EmployeeAccounts />, 'EmployeeAccounts')}>Employee Accounts</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
