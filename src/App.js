import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginPage/Login';
import SignUp from './pages/SignupPage/SignUp';

import Home from './pages/HomePage/Home';
import Profile from './pages/ProfilePage/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
       </Routes>
     </BrowserRouter>
 </div>
  );
}

export default App;
