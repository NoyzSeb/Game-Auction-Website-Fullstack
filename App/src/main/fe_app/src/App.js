import React from 'react';
import './App.css';
import Home from './subScripts/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './subScripts/ItemList';
import ItemEdit from './subScripts/ItemEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/items' exact={true} element={<ItemList/>}/>
        <Route path='/items/:id' element={<ItemEdit/>}/>
      </Routes>
    </Router>
  )
}

export default App;