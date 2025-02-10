import React from 'react';
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, } from "react-router-dom";
import { Home } from "./components/lp";
import { EcHome } from "./components/ec_home";
import { Err404 } from "./components/Page404";
import { EcList } from './components/ec_list';
import { EcDetail } from './components/ec_detail';
import { ComingSoon } from './components/PageComingsoon';
import { EcCartPage } from './components/ec_cart';
import { EcSignupPage } from './components/ec_signup';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/samplesite/ec' element={<EcHome/>} />
          <Route path='/samplesite/ec/itemlist' element={<EcList/>} />
          <Route path='/samplesite/ec/itemdetail' element={<EcDetail/>} />
          <Route path='/samplesite/ec/cart' element={<EcCartPage/>} />
          <Route path='/samplesite/ec/signup' element={<EcSignupPage/>} />
          <Route path='/samplesite/ec/comingsoon' element={<ComingSoon/>} />
          <Route path='/*' element={<Err404/>} /> {/*not foundの時*/}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
