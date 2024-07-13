import './App.css';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Admin } from './Admin/Admin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
