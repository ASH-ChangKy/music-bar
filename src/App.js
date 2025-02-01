import './App.css';
import React, { Fragment } from 'react'
import Home from './pages/home';
import Information from './pages/information';
import AboutBar from './pages/aboutBar';
import DrinkMenu from './pages/drinkMenu';
import BarLink from './pages/barLink';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/header";

const envType = process.env.NODE_ENV === 'development'? '0' : '1';//0开发,1生产
function App() {
  return (
      <Fragment>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path={envType?"/home":"/music-bar/home"} element={Home()} />
                    <Route path={envType?"/information":"/music-bar/information"} element={Information()} />
                    <Route path={envType?"/aboutBar":"/music-bar/aboutBar"} element={AboutBar()} />
                    <Route path={envType?"/drinkMenu":"/music-bar/drinkMenu"} element={DrinkMenu()} />
                    <Route path={envType?"/barLink":"/music-bar/barLink"} element={BarLink()} />
                </Routes>
            </BrowserRouter>
      </Fragment>
  );
}

export default App;
