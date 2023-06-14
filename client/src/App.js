import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';

import RouteGuardIsAuthenticated from './components/Guards/RouteGuardIsAuthenticated';
import RouteGuardIsNotAuthenticated from './components/Guards/RouteGuardIsNotAuthenticated';

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <main>
        <Routes>
          <Route element={<RouteGuardIsAuthenticated />}>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route element={<RouteGuardIsNotAuthenticated />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
