import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/Home/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import DoctorsPage from './pages/Doctors/DoctorsPage';
import Dashboard from './pages/Dashboard/DashboardPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/doctors">
            <DoctorsPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
