import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {

  return <Router>
    <Routes>
      <Route path='/movie/:id' element={<Detail />}></Route>
      <Route path='/'  element={<Home />}></Route>
    </Routes>
  </Router>
}

export default App;
