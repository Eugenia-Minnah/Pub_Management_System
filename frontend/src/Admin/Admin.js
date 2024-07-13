import React from 'react';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
//import { Inventory } from '../Pages/Inventory';
import './Admin.css';
//import { EmployeeAccounts } from '../Pages/EmployeeAccounts';
//import Dashboard  from '../Pages/Dashboard';
import { Reservations } from '../Pages/Reservations';

export const Admin = () => {
  return (
    <div className="app">
      <SideBar className="sidebar" />
      <main className="main-content">
        <Header className="header" />
        <div className="content">
          <Reservations />
        </div>
      </main>
    </div>
  );
};
