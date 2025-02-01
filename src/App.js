import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import Login from './pages/information'
import Home from './pages/home';
import Information from './pages/information';
import AboutBar from './pages/aboutBar';
import DrinkMenu from './pages/drinkMenu';
import BarLink from './pages/barLink';

import { HashRouter, Route, Routes, Navigate, Link } from 'react-router-dom'
import Header from "./components/header";

function App() {
  return (
      <Fragment>
            <Header/>
            <HashRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/information">About</Link>
                        </li>
                        <li>
                            <Link to="/aboutBar">Contact</Link>
                        </li>
                    </ul>
                </nav>
              <Routes>
                <Route path="/home" component={Home} />
                <Route path="/information" component={Information} />
                <Route path="/aboutBar" component={AboutBar} />
                <Route path="/drinkMenu" component={DrinkMenu} />
                <Route path="/barLink" component={BarLink} />
                <Route exact path="/" component={Home} />
                {/*<Navigate to={"/home"} />*/}
              </Routes>
            </HashRouter>
      </Fragment>
  );
}

export default App;
