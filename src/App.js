import './App.css';
import Login from './components/Login.js';
import R11 from './components/R11.js';
import R12 from './components/R12.js';
import R13 from './components/R13.js';
import R14 from './components/R14.js';
import Sales from './components/Sales.js';
import Clients from './components/Clients.js';
import Admin from './components/admin.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  // starts with Login page
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="/r11" element={<R11 />} />
            <Route path="/r12" element={<R12 />} />
            <Route path="/r13" element={<R13 />} />
            <Route path="/r14" element={<R14 />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/sales" element={<Sales />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;