import './App.css';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Admin } from './Admin/Admin'
import Dashboard from './Pages/Dashboard';
import { Inventory } from './Pages/Inventory';
import { EmployeeAccounts } from './Pages/EmployeeAccounts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/EmployeeAccounts" element={<EmployeeAccounts />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
