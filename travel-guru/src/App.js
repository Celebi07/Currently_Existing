import PageNotFound from './Components/PageNotFound/PageNotFound'
import './index.css';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Destinations from './Components/Destinations/Destinations';
import Booking from './Components/Booking/Booking';
import { createContext, useState } from 'react';
import Search from './Components/Search/Search';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LogInMain from './Components/LogIn.main/LogInMain';
import Contact from './Components/Contact/Contact';

export const User = createContext()

function App() {
  // User all Info will goes here
  const [user, setUser] = useState({
    username: '',
    email: '',
    createAccountError: '',
    logInError: '',
    googleError: ''

  })

  return (
    <BrowserRouter>
      <User.Provider value={[user, setUser]}>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Destinations />} />
          <Route path='/home' element={<Destinations />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/destination/:destinationId' element={<Booking />} />
          <Route path='/login' element={<LogInMain />} />
          <Route path='/destination/search' element={<PrivateRoute>
            <Search />
          </PrivateRoute>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </User.Provider>
    </BrowserRouter>

  );
}

export default App;
