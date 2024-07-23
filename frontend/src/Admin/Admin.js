import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import { Header } from '../components/Header';
import './Admin.css';

export const Admin = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="admin-container">
      <SideBar setActiveComponent={setActiveComponent} className="sidebar"/>
      <div className="main-content">
        <Header className="header"/>
        <div className="content">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};
