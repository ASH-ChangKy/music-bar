import './App.css';
import React, { Fragment } from 'react'
import Home from './pages/home';
import Information from './pages/information';
import AboutBar from './pages/aboutBar';
import DrinkMenu from './pages/drinkMenu';
import BarLink from './pages/barLink';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/header";

function App() {
  return (
      <Fragment>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Home()} />
                    <Route path="/home" element={Home()} />
                    <Route path="/music-bar/information" element={Information()} />
                    <Route path="/music-bar/aboutBar" element={<div>About Me</div>} />
                    <Route path="drinkMenu" element={DrinkMenu()} />
                    <Route path="/barLink" element={<div>Bar Link</div>} />
                </Routes>
            </BrowserRouter>
      </Fragment>
  );
}

export default App;
