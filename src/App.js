import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Navbar from './components/Narbar';
import Home from './pages/Home';
import Login from './pages/Login';
import AddPet from './pages/Pets/AddPet';
// import Pets from './pages/Pets/Pets';
import Pets from './pages/Pets/Pet';
import Signup from './pages/Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))
  console.log("Logged in: ", loggedIn)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add-pet' element={ <AddPet /> } />
          <Route path='/pets' element={ <Pets loggedIn={loggedIn} /> } />
          <Route path='/login' element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> } />
          <Route path='/signup' element={ <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;