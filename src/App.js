import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import FourOfour from './Pages/FourOfour/FourOfour';

function App() {
  return (
    <div className="mx-auto px-9 md:px-12 max-w-6xl">
      <Header logo={logo}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/*' element={<FourOfour />} />
      </Routes>
    </div>
  );
}

export default App;
