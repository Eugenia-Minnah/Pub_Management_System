import React from 'react'
import '../Styles/SideBar.css'
import Dashboard from '../Pages/Dashboard';
import { Order } from '../Pages/Order'
import {ManageMenu} from '../Pages/ManageMenu'
import {Inventory} from '../Pages/Inventory'
import {Reservations} from '../Pages/Reservations'
import {EmployeeAccounts} from '../Pages/EmployeeAccounts'

const SideBar = ({ setActiveComponent }) => {
  return (
        <ul>
          <li className="menu-item" onClick={() => setActiveComponent(<Dashboard />)}>Dashboard</li>
          <li className="menu-item" onClick={() => setActiveComponent(<Order />)}>Food Order</li>
          <li className="menu-item" onClick={() => setActiveComponent(<ManageMenu />)}>Manage Menu</li>
          <li className="menu-item" onClick={() => setActiveComponent(<Inventory />)}>Manage Inventory</li>
          <li className="menu-item" onClick={() => setActiveComponent(<Reservations />)}>Manage Reservations</li>
          <li className="menu-item" onClick={() => setActiveComponent(<EmployeeAccounts />)}>Employee Accounts</li>
        </ul>
  );
};

export default SideBar;
