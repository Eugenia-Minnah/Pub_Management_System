import React from 'react'
import '../Styles/Header.css'

export const Header = () => {
  return (
    <div>
        <header className="header">
            <input type="text" placeholder="Search" />
            <div className="user-info">
            <span>Bernice Naa</span>
            <span className="notification-icon">🔔</span>
            </div>
        </header>
    </div>
  )
}
