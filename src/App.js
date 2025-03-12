import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shope from './pages/Shope';
import Product from './pages/Product';
import Cart from './components/Cart';
import Singleproduct from './pages/Singleproduct';
import Login from './components/Login';
import User_reg from './components/User_reg';
import Demo1 from './pages/Demo1';
import Cheakout from './components/Cheakout';










function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registraion' element={<User_reg />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/shop' element={<Shope />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/demo' element={<Demo1 />} />
        <Route path='/singlepro/:productId' element={<Singleproduct />} />
        <Route path='/cheakout' element={<Cheakout/>}/>
        

      </Routes>


      
    </>
  );
}

export default App;
