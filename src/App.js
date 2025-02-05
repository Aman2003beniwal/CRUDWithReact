import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/pages/Home';
import List from './component/student/List';
import AddNew from './component/student/AddNew';
import Edit from './component/student/Edit';
import View from './component/student/View';



function App() {
  return (
    < div className='App'>
      {/* json file ko run karna ka liya used kara ga: npx json-server --watch db.json --port 3333 */}
      <h2>This is over crud project</h2>
      <BrowserRouter>
        <Link to="/home">Home</Link>&nbsp;&nbsp;
        <Link to="/list">List</Link>&nbsp;&nbsp;
        <Link to="/add-new">Add-New</Link>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/add-new' element={<AddNew />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='/view/:id' element={<View />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
