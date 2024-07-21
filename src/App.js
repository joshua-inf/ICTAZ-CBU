import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Navigation/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <BrowserRouter>
        <div className='d-flex justify-content-between flex-column h-100'>
          <Nav />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
