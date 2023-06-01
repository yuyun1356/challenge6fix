import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Provider } from 'react-redux';
import store from './redux/store'
import RedirectifProtected from "./components/RedirectifProtected";
import MovieDetail from './pages/MovieDetail'
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from './components/Footer';
import Search from './pages/Search';
import Protected from './components/Protected'
import Dashboard from './pages/Dashboard';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path="/login"
            element={
              <RedirectifProtected>
                <Login />
              </RedirectifProtected>
            }
          />

          <Route 
            path="/register"
            element={
              <RedirectifProtected>
                <Register />
              </RedirectifProtected>
            }
          />

        <Route path='/movie/:id' element={<MovieDetail />} />

        <Route path='/search' element={<Search />} />

        <Route 
            path="/user/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />

        </Routes>
        <Footer />
        <ToastContainer theme="colored"/>
      </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
