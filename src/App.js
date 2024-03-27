import './App.css';
import { Router } from 'react-router-dom';
import ProductAll from './Page/ProductAll';
import ProductDDetail from './ProductDDetail';
import Login from './Page/Login';
import Navbar from './component/Navbar';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
    <Route path='/' element={<ProductAll/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product/:id' element={<ProductDDetail/>}/>

      </Routes>
    </div>
  );
}

export default App;
