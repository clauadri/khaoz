import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/navbar/Navbar';
import Artistas from './pages/Artistas';
import Home from './pages/Home';
import Musica from './pages/Musica';
import Contacto from './pages/Contacto';
import Lienzos from './pages/Lienzos';
import Artesania from './pages/Artesania';
import Register from './pages/Register';
import Footer from './componentes/footer/Footer';
import Login from './pages/Login';
function App() {
  return (
    <div className="App" id="outer-container">
     <div id="page-wrap" >
      
    </div>
      <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='artistas' element={<Artistas/>}/>
        <Route path='musica' element={<Musica/>}/>
        <Route path='lienzos' element={<Lienzos/>}/>
        <Route path='artesania' element={<Artesania/>}/>
        <Route path='registrarse' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contacto' element={<Contacto/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
