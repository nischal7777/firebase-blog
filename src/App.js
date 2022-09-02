
import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { signOut } from 'firebase/auth'
import { useState } from 'react';
import { auth } from './firebase';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  const signout = async () => {
    try {
      await signOut(auth)
      setIsAuth(false)
      localStorage.clear()
      window.location.pathname = '/login'
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        {!isAuth ? <Link to='/login'>Login</Link> : (
          <>
            <Link to='/createPost'>CreatePost</Link>

            <button onClick={() => { signout() }}>Logout</button>
          </>)}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/createPost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
