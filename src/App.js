import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import ProductAll from './Page/ProductAll';
import ProductDDetail from './ProductDDetail';
import Login from './Page/Login';
import Navbar from './component/Navbar';
import { Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate,setAuthenticate]=useState(false)
  useEffect(()=>{
    console.log(`현재 로그인 상태 : ${authenticate}`)
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
    <Route path='/' element={<ProductAll/>}/>
    <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
    <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>

      </Routes>
    </div>
  );
}

export default App;
