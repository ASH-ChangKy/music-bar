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
            <BrowserRouter basename="/music-bar">
                <Routes>
                    <Route path="/home" element={Home()} />
                    <Route path="/information" element={Information()} />
                    <Route path="/aboutBar" element={AboutBar()} />
                    <Route path="/drinkMenu" element={DrinkMenu()} />
                    <Route path="/barLink" element={BarLink()} />
                </Routes>
            </BrowserRouter>
      </Fragment>
  );
}

export default App;
