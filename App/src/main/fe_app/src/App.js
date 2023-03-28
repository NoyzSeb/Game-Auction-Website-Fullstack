import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './subScripts/Home';
import ItemList from './subScripts/ItemList';
import ItemEdit from './subScripts/ItemEdit';
import ItemAuction from './subScripts/ItemAuction';
import AuctionList from './subScripts/AuctionList';
import UserLogin from './subScripts/UserLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route path='/items' exact={true} element={<ItemList/>}/>
        <Route path='/items/:id' element={<ItemEdit/>}/>
        <Route path='/auction' element={<AuctionList/>}/>
        <Route path='/:id' element={<ItemAuction/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>

      </Routes>
    </Router>
  )
}

export default App;