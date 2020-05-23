import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./layout/Header'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Footer from './layout/Footer'
import SidePanel from './component/SidePanel'
import Heading from './component/Heading'
import CardFormModule from './component/CardFormModule'
import Dashboard from './component/Dashboard'
import { Provider } from "react-redux";
import store from "./store";




function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header/>
      <Route path="/Dashboard" component={Dashboard}/>
    <CardFormModule/>
    </Router>
    </Provider>
  );
}

export default App;
