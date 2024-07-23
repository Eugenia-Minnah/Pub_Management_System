import './App.css';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Admin } from './Admin/Admin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
