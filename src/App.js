import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouterContext } from 'react-router';
import Sidebar from './components/Sidebar'
import Create from './components/Create';
import Dashboard from './Dashboard';
import Home from './components/Home';
import SignUp from './SignUp';
import Videos from './components/Videos'
import Analytics from './components/Analytics'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/create' element={<Create />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Videos' element={<Videos />} />
          <Route path='/Analytics' element={<Analytics />} />
          {/* <Route path=':productId' element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
