import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Load from "./pages/Load"
import Signup from "./pages/signup";
import Login from './pages/login';
import "./App.css";
import Home from './pages/Sidebar-pages/home';
import Cart from './pages/Sidebar-pages/cart';
import Chat from './pages/Sidebar-pages/chat';
import News from './pages/Sidebar-pages/news';
import Education from './pages/Sidebar-pages/education';
import ContactUs from './pages/Sidebar-pages/conus';
import Shop from './pages/Sidebar-pages/shop';
import Profile from './pages/Sidebar-pages/profile';
import SellWool from './pages/Sidebar-pages/sellwool';
import Buywool from './pages/Sidebar-pages/buywool';
import SellHistory from './components/SellHistory';
import BuyHistory from './components/BuyHistory';
import Product from './components/Product';

import ProductList from './productJson/ProductList.json'

export default function App() {

  localStorage.setItem("ProductList",JSON.stringify(ProductList))

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>    
        <Route index element={<Load />} />
        <Route path="/load" element={<Load />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/sellwool" element={<SellWool />} />
        <Route path="/shop/buywool" element={<Buywool />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/sellhistory" element={<SellHistory/>} />
        <Route path="/profile/buyhistory" element={<BuyHistory/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/news" element={<News />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/product" element={<Product />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}