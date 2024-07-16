import React from 'react';
import '../Styles/Header.css';
import { useUser } from'../components/UserContext'

export const Header = () => {
  const { username } = useUser();

  return (
    <header className="header">
      <input type="text" placeholder="Search" />
      <div className="user-info">
        <span>{username}</span>
        <span className="notification-icon">🔔</span>
      </div>
    </header>
  );
};
