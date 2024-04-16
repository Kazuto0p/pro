
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

import Signup from './components/Signup';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
  
      <Navbar/>

      
      <Routes>
        <Route path='Admin'element={<Admin/>}/>
        <Route path='Signup'element={<Signup/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
