
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import LoginPage from './component/LoginPage';
import SignUpPage from './component/SignUpPage';
function App() {
  return (
    <>
      {<Navbar />  }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/addProduct' element={<AddProduct />}/>
        <Route path='/editProduct/:id' element={<EditProduct />}/>
      </Routes>
    </>
  );
}
export default App;