import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import Header from './Shared/Header/Header';
import FourOfour from './Pages/FourOfour/FourOfour';
import Signup from './Pages/Login/Signup';

function App() {
  return (
    <div className="mx-auto px-9 md:px-12 max-w-6xl">
      <Header logo={logo}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/*' element={<FourOfour />} />
      </Routes>
    </div>
  );
}

export default App;
