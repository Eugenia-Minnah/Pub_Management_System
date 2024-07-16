import React from 'react'
import '../Styles/SideBar.css'
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/Dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/Dashboard">EmployeeAccounts</Link>
      </li>
      <li>
        <Link to="/Dashboard">Inventory</Link>
      </li>
      <li>
        <Link to="/Dashboard">Login</Link>
      </li>
      </ul>
      </nav>
  )
}
