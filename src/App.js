import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import Header from './Shared/Header/Header';
import FourOfour from './Pages/FourOfour/FourOfour';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Blogs from './Blogs.js/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import Portfolio from './Pages/Portfolio';
import Payment from './Pages/Payment/Payment';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div className="mx-auto px-9 md:px-12 max-w-6xl">
      <Header logo={logo}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<Portfolio />} />
        <Route path="/purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />

        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>
          <Route path="products" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/*' element={<FourOfour />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
